"use client";
import React from "react";
import styles from "./StructureScreen.module.scss";
import ClubSelect from "@/components/UI/select/ClubSelect";

const StructureScreen = () => {
   return (
      <div className="screen">
         <div className="section">
            <div className={styles.head}>
               <div className="container">
                  <div className={styles["head-content"]}>
                     <div className="title-h1">Структура организации</div>
                     <ClubSelect />
                  </div>
               </div>
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default StructureScreen;
