"use client";
import React from "react";
import styles from "./ScheduleScreen.module.scss";
import { SlidersHorizontal } from "lucide-react";
import FullSchedule from "./fullSchedule/FullSchedule";

const ScheduleScreen = () => {
   return (
      <div className="screen">
         <div className="section">
            <div className={styles.head}>
               <div className="container">
                  <div className="flex items-center justify-between">
                     <div className="title-h1">Расписание тренировок TKD</div>
                     <button type="button" className={styles.filter}>
                        <SlidersHorizontal size={16} />
                        <div className={styles.text}>Фильтры</div>
                     </button>
                  </div>
               </div>
            </div>
            <div className="mx-5">
               <FullSchedule />
            </div>
         </div>
      </div>
   );
};

export default ScheduleScreen;
