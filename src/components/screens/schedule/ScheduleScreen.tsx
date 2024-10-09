"use client";
import React, { useState } from "react";
import styles from "./ScheduleScreen.module.scss";
import FullSchedule from "./fullSchedule/FullSchedule";
import ScheduleFilters from "./filters/ScheduleFilters";
import { filterData, IFilter } from "./filters/filters.data";

const ScheduleScreen = () => {
   const [filter, setFilter] = useState<IFilter[]>(filterData);
   return (
      <div className="screen">
         <div className="section">
            <div className={styles.head}>
               <div className="container">
                  <div className="flex items-center justify-between">
                     <div className="title-h1">Расписание тренировок TKD</div>
                     <ScheduleFilters filter={filter} setFilter={setFilter} />
                  </div>
               </div>
            </div>
            <div className="mx-2">
               <FullSchedule />
            </div>
         </div>
      </div>
   );
};

export default ScheduleScreen;
