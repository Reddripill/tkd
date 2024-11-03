"use client";
import React, { useState } from "react";
import styles from "../Schedule.module.scss";
import ScheduleEmpty from "../ScheduleEmpty";
import cn from "classnames";
import { clubList, IClub } from "../../home/fullmap/clubs.data";
import ClubModal from "@/components/UI/modal/ClubModal";

const ScheduleScreen = () => {
   const [value, setValue] = useState<IClub>(clubList[0]);
   return (
      <div className="screen">
         <div className="section">
            <div className={styles.head}>
               <div className="container">
                  <div className={styles["head-content"]}>
                     <div className={cn("title-h1", styles["schedule-title"])}>
                        Расписание тренировок
                     </div>
                     <ClubModal value={value} setValue={setValue} />
                  </div>
               </div>
            </div>
            <ScheduleEmpty text="Выберите нужный клуб" />
         </div>
      </div>
   );
};

export default ScheduleScreen;
