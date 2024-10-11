"use client";
import React from "react";
import styles from "../Schedule.module.scss";
import ScheduleSelect from "../ScheduleSelect";
import ScheduleEmpty from "../ScheduleEmpty";

const ScheduleScreen = () => {
   return (
      <div className="screen">
         <div className="section">
            <div className={styles.head}>
               <div className="container">
                  <div className="flex items-center justify-between">
                     <div className="title-h1">Расписание тренировок</div>
                     <ScheduleSelect />
                  </div>
               </div>
            </div>
            <ScheduleEmpty text="Выберите нужный клуб" />
         </div>
      </div>
   );
};

export default ScheduleScreen;
