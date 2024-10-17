"use client";
import React from "react";
import styles from "../Schedule.module.scss";
import ScheduleSelect from "../ScheduleSelect";
import ScheduleEmpty from "../ScheduleEmpty";
import cn from "classnames";

const ScheduleScreen = () => {
   return (
      <div className="screen">
         <div className="section">
            <div className={styles.head}>
               <div className="container">
                  <div className={styles["head-content"]}>
                     <div className={cn("title-h1", styles["schedule-title"])}>
                        Расписание тренировок
                     </div>
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
