import React from "react";
import { ScheduleEventInputType } from "@/types/fullCalendar.types";
import { EventContentArg } from "@fullcalendar/core/index.js";
import { transformTime } from "@/utility/transformTime";

interface IProps extends EventContentArg {
   schedule: ScheduleEventInputType[];
   eventSlotHeight: number;
   gap: number;
   isMobile: boolean;
}

const FullScheduleEvent = ({
   timeText,
   event,
   schedule,
   eventSlotHeight,
   isMobile,
   gap,
}: IProps) => {
   const getTop = () => {
      let index: number = 0;
      if (!isMobile) {
         const currentEventStart = timeText.split("-")[0].trim();
         const sortedSchedule = schedule.filter(
            (item) =>
               transformTime(item.startTime) ===
               transformTime(currentEventStart)
         );
         index = sortedSchedule.findIndex((item) => item.id === event.id);
      } else {
         index = schedule.findIndex((item) => item.id === event.id);
      }
      return index > 0 ? index * (eventSlotHeight + gap) : 0;
   };
   return (
      <div
         className="fc-event-custom"
         style={{ top: getTop() + "px", height: eventSlotHeight + "px" }}
      >
         <div className="fc-event-head">
            <div className="fc-event-time">{timeText}</div>
            <div className="fc-event-title">{event.title}</div>
         </div>
         {event.extendedProps.hall && (
            <div className="fc-event-hall">Зал {event.extendedProps.hall}</div>
         )}
      </div>
   );
};

export default FullScheduleEvent;
