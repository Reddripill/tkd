"use client";
import React, { useState } from "react";
import styles from "../Schedule.module.scss";
import FullSchedule from "../fullSchedule/FullSchedule";
import ScheduleFilters from "../filters/ScheduleFilters";
import { scheduleEvents } from "../schedule.data";
import ScheduleEmpty from "../ScheduleEmpty";
import { clubList, IClub } from "../../home/fullmap/clubs.data";
import { filterData, IFilter, IFilterOption } from "../filters/filters.data";
import { configFilter } from "@/utility/configFilter";

const ScheduleDynScreen = ({ club_id }: { club_id: string }) => {
   const clubEvents = scheduleEvents.find((item) => item.club_id === club_id);
   const club = clubList.find((item) => item.id === club_id) as IClub;
   const clubOption = { label: club.label, value: club.id } as IFilterOption;
   const defaultFilter = configFilter(filterData, "club", clubOption);
   const [events, setEvents] = useState(clubEvents);
   const [filter, setFilter] = useState<IFilter[]>(defaultFilter);
   if (!events) {
      return <ScheduleEmpty text={`Для ${club_id} нет расписания`} />;
   }
   return (
      <div className="screen">
         <div className="section">
            <div className={styles.head}>
               <div className="container">
                  <div className="flex items-center justify-between">
                     <div className="title-h1">Расписание тренировок TKD</div>
                     <ScheduleFilters
                        currentClub={clubOption}
                        setEvents={setEvents}
                        filter={filter}
                        setFilter={setFilter}
                        defaultEvents={events}
                        defaultFilter={defaultFilter}
                     />
                  </div>
               </div>
            </div>
            <div className="mx-2">
               <FullSchedule events={events.events} />
            </div>
         </div>
      </div>
   );
};

export default ScheduleDynScreen;
