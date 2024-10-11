import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { IFilter, IFilterOption } from "./filters.data";
import CheckboxField from "./CheckboxField";
import InputField from "./InputField";
import { SetStateType } from "@/types/main.types";
import { ScheduleEventType } from "@/types/fullCalendar.types";
import styles from "./ScheduleFilters.module.scss";
import cn from "classnames";
import CustomModal from "@/components/UI/modal/CustomModal";
import { scheduleEvents } from "../schedule.data";
import { usePathname, useRouter } from "next/navigation";

interface IProps {
   setEvents: SetStateType<ScheduleEventType | undefined>;
   currentClub: IFilterOption;
   filter: IFilter[];
   setFilter: SetStateType<IFilter[]>;
   defaultEvents: ScheduleEventType;
   defaultFilter: IFilter[];
}

const ScheduleFilters = ({
   setEvents,
   currentClub,
   filter,
   setFilter,
   defaultEvents,
   defaultFilter,
}: IProps) => {
   const router = useRouter();
   const pathname = usePathname();
   const [isOpen, setIsOpen] = useState(false);
   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);
   const handleApplyFilters = () => {
      handleClose();
      const currentClubFilter = filter.find(
         (item) => item.filterName === "club"
      ) as IFilter;
      if (defaultEvents.club_id !== currentClubFilter.value[0].value) {
         const pathnameArr = pathname.split("/");
         pathnameArr[pathnameArr.length - 1] =
            currentClubFilter.value[0].value.toString();
         const newPathname = pathnameArr.join("/");
         router.push(newPathname);
      }
      let events = scheduleEvents.find(
         (schedule) => schedule.club_id === currentClubFilter.value[0]?.value
      ) as ScheduleEventType;
      setEvents((prevEvents) => {
         if (prevEvents?.club_id !== currentClub.value) {
            console.log(pathname);
         }
         for (const item of filter) {
            if (item.filterName === "timesOfDay") {
               const distinctions: number[][] = [];
               for (const value of item.value) {
                  if (value.value === "morning") {
                     distinctions.push([6, 12]);
                  }
                  if (value.value === "afternoon") {
                     distinctions.push([12, 18]);
                  }
                  if (value.value === "night") {
                     distinctions.push([18, 0]);
                  }
               }
               if (distinctions.length !== 0) {
                  const filteredEvents = events.events.filter((event) => {
                     const eventStartTimeHour = +(
                        event.startTime as string
                     ).split(":")[0];
                     return Boolean(
                        distinctions.find(
                           (dist) =>
                              dist[0] <= eventStartTimeHour &&
                              dist[1] > eventStartTimeHour
                        )
                     );
                  });
                  events = { ...events, events: filteredEvents };
               }
            }
            if (item.filterName === "place") {
               const filtersValue = item.options
                  ? item.value.map((itemValue) => itemValue.value)
                  : [];
               if (filtersValue.length !== 0) {
                  const filteredEvents = events.events.filter((event) => {
                     if (event.hall) return filtersValue.includes(event.hall);
                     return false;
                  });
                  events = { ...events, events: filteredEvents };
               }
            }
         }
         return events;
      });
   };
   const handleCancelFilters = () => {
      handleClose();
      setFilter(defaultFilter);
      setEvents(defaultEvents);
   };
   return (
      <>
         <button type="button" className={styles.filter} onClick={handleOpen}>
            <SlidersHorizontal size={16} />
            <div className={styles.text}>Фильтры</div>
         </button>
         <CustomModal
            title="Расписание тренировок TKD"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
         >
            <div className={styles.main}>
               {filter.map((filterItem) => (
                  <div key={filterItem.label} className={styles["filter-item"]}>
                     <div className={styles["filter-name"]}>
                        {filterItem.label}
                     </div>
                     {filterItem.type === "checkbox" ? (
                        <div className={styles["filter-checkbox-field"]}>
                           <CheckboxField
                              filterItem={filterItem}
                              setFilter={setFilter}
                           />
                        </div>
                     ) : (
                        <div className={styles["filter-input-field"]}>
                           <InputField
                              filterItem={filterItem}
                              setFilter={setFilter}
                           />
                        </div>
                     )}
                  </div>
               ))}
            </div>
            <div className={styles.actions}>
               <button
                  type="button"
                  className={cn(styles.button, styles["button-apply"])}
                  onClick={handleApplyFilters}
               >
                  Применить
               </button>
               <button
                  type="button"
                  className={cn(styles.button, styles["button-cancel"])}
                  onClick={handleCancelFilters}
               >
                  Сбросить
               </button>
            </div>
         </CustomModal>
      </>
   );
};

export default ScheduleFilters;
