import React from "react";
import styles from "./CalendarEvents.module.scss";
import { calendarEvents } from "../calendar.data";
import dayjs from "dayjs";

const CalendarEvents = () => {
   return (
      <div className={styles.wrapper}>
         <div className="title-h1">События</div>
         <div className="flex flex-col gap-y-4">
            {calendarEvents.map((event) => (
               <div key={event.id} className={styles.item}>
                  <div className={styles.date}>
                     {dayjs(event.start.toString()).format("LL")}
                  </div>
                  <div className={styles.title}>{event.title}</div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CalendarEvents;
