import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import ruLocale from "@fullcalendar/core/locales/ru";
import FullScheduleEvent from "./FullScheduleEvent";
import FullScheduleSlotLabel from "./FullScheduleSlotLabel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScheduleEventInputType } from "@/types/fullCalendar.types";
import { DayHeaderContentArg } from "@fullcalendar/core/index.js";
import { transformWeekDay } from "@/utility/transformWeekDay";
import "./FullSchedule.scss";

const FullSchedule = ({ events }: { events: ScheduleEventInputType[] }) => {
   const scheduleRef = useRef<FullCalendar>(null);
   const [currentDay, setCurrentDay] = useState<Date | null>(null);
   const [eventSlotHeight, setEventSlotHeight] = useState(100);
   const EVENT_GAP = 8;
   const configCellHeight = () => {
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
   const configCalendar = () => {
      if (typeof window !== undefined) {
         const width = window.innerWidth;
         const calendarApi = scheduleRef.current?.getApi();
         if (calendarApi) {
            if (width < 1280) {
               calendarApi.setOption("dayHeaderFormat", {
                  weekday: "short",
                  day: "numeric",
                  month: "2-digit",
               });
            } else {
               calendarApi.setOption("dayHeaderFormat", {
                  weekday: "long",
                  day: "numeric",
                  month: "2-digit",
               });
            }
            if (width < 1024) {
               setCurrentDay(calendarApi.getDate());
            } else {
               setCurrentDay(null);
            }
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
   const handleDateClick = (date: Date) => {
      if (typeof window !== undefined) {
         const width = window.innerWidth;
         if (width < 1024) {
            setCurrentDay(date);
         }
      }
   };
   const renderDayHeaders = (arg: DayHeaderContentArg) => {
      const text = arg.text;
      const formatedText = text[0].toUpperCase() + text.slice(1);
      return (
         <div
            key={arg.text}
            className="fc-day-header"
            onClick={() => handleDateClick(arg.date)}
         >
            {formatedText}
         </div>
      );
   };
   const filteredEvents = () => {
      if (currentDay) {
         return events.filter((item) => {
            if (item.daysOfWeek) {
               return (item.daysOfWeek as number[]).some(
                  (day) =>
                     day === transformWeekDay(new Date(currentDay).getDay())
               );
            } else if (item.start) {
               return (
                  new Date(item.start as string).toISOString().split("T")[0] ===
                  new Date(currentDay).toISOString().split("T")[0]
               );
            }
         });
      }
      return events;
   };
   useLayoutEffect(() => {
      let throttled = false;
      const handleResize = () => {
         if (!throttled) {
            configCellHeight();
            configCalendar();
            throttled = true;
            setTimeout(function () {
               throttled = false;
            }, 250);
         }
      };
      configCellHeight();
      configCalendar();
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
                     schedule={events}
                     gap={EVENT_GAP}
                     {...event}
                  />
               );
            }}
            allDaySlot={false}
            dayHeaderContent={renderDayHeaders}
            slotMinTime="08:00"
            slotDuration="1:00:00"
            events={filteredEvents()}
            headerToolbar={false}
            eventContent={(event) => {
               return (
                  <FullScheduleEvent
                     gap={EVENT_GAP}
                     eventSlotHeight={eventSlotHeight}
                     schedule={events}
                     {...event}
                  />
               );
            }}
         />
         <div
            className="fc-schedule-button fc-schedule-button__prev"
            onClick={handlePrevClick}
         >
            <ChevronLeft size={24} />
         </div>
         <div
            className="fc-schedule-button fc-schedule-button__next"
            onClick={handleNextClick}
         >
            <ChevronRight size={24} />
         </div>
      </div>
   );
};

export default FullSchedule;
