"use client";
import React, { useLayoutEffect, useState, useRef } from "react";
import { Clusterer, Map, Placemark } from "@pbe/react-yandex-maps";
import MapSearch from "./mapSearch/MapSearch";
import styles from "./FullMap.module.scss";
import { clubList, IClub } from "./clubs.data";

type YMapShapeType = {
   width: number;
   height: number;
};

const YMap = () => {
   const [size, setSize] = useState<YMapShapeType>({ height: 800, width: 0 });
   const [value, setValue] = useState<IClub | null>(clubList[0]);
   const mapRef = useRef<ymaps.Map | undefined>(undefined);
   const configMapSize = () => {
      if (typeof window !== undefined) {
         setSize((prevSize) => ({
            ...prevSize,
            width: document.body.clientWidth,
         }));
      }
   };
   const handleClickPlacemark = (coords: number[]) => {
      if (mapRef.current) {
         mapRef.current.setCenter(coords, 12, { duration: 500 });
      }
   };
   const handleChangeValue = (val: IClub) => {
      handleClickPlacemark(val.coords);
      setValue(val);
   };
   useLayoutEffect(() => {
      let throttled = false;
      const handleResize = () => {
         if (!throttled) {
            configMapSize();
            throttled = true;
            setTimeout(function () {
               throttled = false;
            }, 250);
         }
      };
      configMapSize();
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);
   return (
      <div className="relative">
         <Map
            width={size.width}
            height={size.height}
            state={{ center: clubList[0].coords, zoom: 12 }}
            className={styles.ymap}
            instanceRef={mapRef}
         >
            <Clusterer
               options={{
                  preset: "islands#invertedVioletClusterIcons",
                  groupByCoordinates: false,
               }}
            >
               {clubList.map((clubItem) => (
                  <Placemark
                     key={clubItem.id}
                     geometry={clubItem.coords}
                     onClick={() => handleClickPlacemark(clubItem.coords)}
                  />
               ))}
            </Clusterer>
            <MapSearch value={value} handleChangeValue={handleChangeValue} />
         </Map>
      </div>
   );
};

export default YMap;
