import React from "react";
import { SlotLabelContentArg } from "@fullcalendar/core/index.js";
import { ScheduleEventInputType } from "@/types/fullCalendar.types";
import { transformTime } from "@/utility/transformTime";

interface IProps extends SlotLabelContentArg {
   gap: number;
   schedule: ScheduleEventInputType[];
   eventSlotHeight: number;
}

interface IDayEvents {
   day: number;
   events: (number | string)[];
}

const FullScheduleSlotLabel = ({
   text,
   gap,
   schedule,
   eventSlotHeight,
}: IProps) => {
   const getTop = () => {
      let sortedSchedule: IDayEvents[] = [];
      const sortedScheduleByTime = schedule.filter(
         (item) => transformTime(item.startTime) === transformTime(text)
      );
      sortedScheduleByTime.forEach((item) => {
         for (const day of item.daysOfWeek) {
            const dayEventsIndex = sortedSchedule.findIndex(
               (uniqueDayItem) => uniqueDayItem.day === day
            );
            if (dayEventsIndex === -1) {
               sortedSchedule.push({ day, events: [item.id] });
            } else {
               sortedSchedule[dayEventsIndex].events.push(item.id);
            }
         }
      });
      const eventCount = sortedSchedule.map((item) => item.events.length);
      const maxEventCount = Math.max(...eventCount);
      return maxEventCount * eventSlotHeight + gap * (maxEventCount - 1);
   };

   return (
      <div
         className="fc-timegrid-slot-label-custom"
         style={{ height: getTop() + "px" }}
      >
         {text}
      </div>
   );
};

export default FullScheduleSlotLabel;
