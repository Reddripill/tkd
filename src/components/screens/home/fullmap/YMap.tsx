"use client";
import { Clusterer, Map, Placemark } from "@pbe/react-yandex-maps";
import React, { useLayoutEffect, useState } from "react";
import MapSearch from "./mapSearch/MapSearch";
import styles from "./FullMap.module.scss";
import { clubList } from "./clubs.data";

type YMapShapeType = {
   width: number;
   height: number;
};

const YMap = () => {
   const [size, setSize] = useState<YMapShapeType>({ height: 800, width: 0 });
   const configMapSize = () => {
      if (typeof window !== undefined) {
         setSize((prevSize) => ({
            ...prevSize,
            width: document.body.clientWidth,
         }));
      }
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
            state={{ center: [55.796125, 49.1064], zoom: 12 }}
            className={styles.ymap}
         >
            <Clusterer
               options={{
                  preset: "islands#invertedVioletClusterIcons",
                  groupByCoordinates: false,
               }}
            >
               {clubList.map((clubItem) => (
                  <Placemark key={clubItem.id} geometry={clubItem.coords} />
               ))}
            </Clusterer>
            <MapSearch />
         </Map>
      </div>
   );
};

export default YMap;
