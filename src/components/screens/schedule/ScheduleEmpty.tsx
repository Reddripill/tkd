import React from "react";
import { MapPin } from "lucide-react";
import styles from "./Schedule.module.scss";

const ScheduleEmpty = ({ text }: { text: string }) => {
   return (
      <div className={styles.body}>
         <div className={styles.icon}>
            <MapPin />
         </div>
         <div className={styles.content}>
            <div className={styles.title}>Нет доступных тренировок</div>
            <div className={styles.text}>{text}</div>
         </div>
      </div>
   );
};

export default ScheduleEmpty;
