"use client";
import React from "react";
import styles from "../Schedule.module.scss";
import ScheduleEmpty from "../ScheduleEmpty";
import cn from "classnames";
import ClubSelect from "@/components/UI/select/ClubSelect";

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
                     <ClubSelect />
                  </div>
               </div>
            </div>
            <ScheduleEmpty text="Выберите нужный клуб" />
         </div>
      </div>
   );
};

export default ScheduleScreen;
