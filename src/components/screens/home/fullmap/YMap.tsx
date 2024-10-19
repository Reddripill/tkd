"use client";
import React, { useLayoutEffect, useState, useRef, useCallback } from "react";
import { Clusterer, Map, Placemark } from "@pbe/react-yandex-maps";
import MapSearch from "./mapSearch/MapSearch";
import styles from "./FullMap.module.scss";
import { clubList, IClub } from "./clubs.data";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import ClubPlacemark from "./ClubPlacemark";

type YMapShapeType = {
   width: number;
   height: number;
};

const YMap = () => {
   const [size, setSize] = useState<YMapShapeType>({ height: 800, width: 0 });
   const [value, setValue] = useState<IClub>(clubList[0]);
   const isMobile = useMatchMedia("(max-width: 1024px)");
   const mapRef = useRef<ymaps.Map | undefined>(undefined);
   const configMapSize = useCallback(() => {
      if (typeof window !== undefined) {
         if (isMobile) {
            setSize((prevSize) => ({
               ...prevSize,
               height: 500,
               width: document.body.clientWidth,
            }));
         } else {
            setSize((prevSize) => ({
               ...prevSize,
               width: document.body.clientWidth,
            }));
         }
      }
   }, [isMobile]);
   const changePlacemarkCoords = (coords: number[]) => {
      if (mapRef.current) {
         mapRef.current.setCenter(coords, 12, { duration: 500 });
      }
   };
   const handleClickPlacemark = (item: IClub) => {
      changePlacemarkCoords(item.coords);
      setValue(item);
   };
   const handleChangeValue = (val: IClub) => {
      changePlacemarkCoords(val.coords);
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
   }, [configMapSize]);
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
                  <ClubPlacemark
                     key={clubItem.id}
                     clubItem={clubItem}
                     handleClickPlacemark={handleClickPlacemark}
                     value={value}
                     handleChangeValue={handleChangeValue}
                     isMobile={isMobile}
                  />
               ))}
            </Clusterer>
            {!isMobile && (
               <MapSearch value={value} handleChangeValue={handleChangeValue} />
            )}
         </Map>
      </div>
   );
};

export default YMap;
