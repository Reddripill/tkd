import React, { useState, useRef, useLayoutEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import ruLocale from "@fullcalendar/core/locales/ru";
import { scheduleEvents } from "../schedule.data";
import FullScheduleEvent from "./FullScheduleEvent";
import "./FullSchedule.scss";
import FullScheduleSlotLabel from "./FullScheduleSlotLabel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FullSchedule = () => {
   const scheduleRef = useRef<FullCalendar>(null);
   const [eventSlotHeight, setEventSlotHeight] = useState(100);
   const EVENT_GAP = 8;
   const configAspectRatio = () => {
      if (typeof window !== undefined) {
         const width = window.innerWidth;
         if (width > 1400) {
            setEventSlotHeight(100);
         } else if (width > 1024) {
            setEventSlotHeight(140);
         } else {
            setEventSlotHeight(100);
         }
      }
   };
   const handlePrevClick = () => {
      const calendarApi = scheduleRef.current?.getApi();
      if (calendarApi) calendarApi.prev();
   };
   const handleNextClick = () => {
      const calendarApi = scheduleRef.current?.getApi();
      if (calendarApi) calendarApi.next();
   };
   useLayoutEffect(() => {
      let throttled = false;
      const handleResize = () => {
         if (!throttled) {
            configAspectRatio();
            throttled = true;
            setTimeout(function () {
               throttled = false;
            }, 250);
         }
      };
      configAspectRatio();
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);
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
         <div
            className="fc-schedule-button fc-schedule-button__prev"
            onClick={handlePrevClick}
         >
            <ChevronLeft />
         </div>
         <div
            className="fc-schedule-button fc-schedule-button__next"
            onClick={handleNextClick}
         >
            <ChevronRight />
         </div>
      </div>
   );
};

export default FullSchedule;
