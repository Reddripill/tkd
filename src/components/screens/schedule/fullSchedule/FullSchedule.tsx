import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import ruLocale from "@fullcalendar/core/locales/ru";
import { scheduleEvents } from "../schedule.data";
import FullScheduleEvent from "./FullScheduleEvent";
import "./FullSchedule.scss";
import FullScheduleSlotLabel from "./FullScheduleSlotLabel";

const FullSchedule = () => {
   const scheduleRef = useRef<FullCalendar>(null);
   const [eventSlotHeight, SetEventSlotHeight] = useState(100);
   const EVENT_GAP = 8;
   return (
      <div className="full-schedule">
         <FullCalendar
            ref={scheduleRef}
            height="auto"
            eventMinHeight={eventSlotHeight}
            plugins={[timeGridPlugin]}
            initialView="timeGridWeek"
            locale={ruLocale}
            dayHeaderFormat={{
               weekday: "long",
               day: "numeric",
               month: "2-digit",
            }}
            slotLabelFormat={{ hour: "2-digit", minute: "2-digit" }}
            slotLabelContent={(event) => {
               // console.log("Slot event: ", event);
               return (
                  <FullScheduleSlotLabel
                     eventSlotHeight={eventSlotHeight}
                     schedule={scheduleEvents}
                     gap={EVENT_GAP}
                     {...event}
                  />
               );
            }}
            allDaySlot={false}
            dayHeaderContent={(arg) => {
               const text = arg.text;
               return text[0].toUpperCase() + text.slice(1);
            }}
            slotMinTime="08:00"
            slotDuration="1:00:00"
            events={scheduleEvents}
            headerToolbar={false}
            eventContent={(event) => {
               // console.log(event);
               return (
                  <FullScheduleEvent
                     gap={EVENT_GAP}
                     eventSlotHeight={eventSlotHeight}
                     schedule={scheduleEvents}
                     {...event}
                  />
               );
            }}
         />
      </div>
   );
};

export default FullSchedule;
