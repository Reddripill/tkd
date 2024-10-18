import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import ruLocale from "@fullcalendar/core/locales/ru";
import FullScheduleEvent from "./FullScheduleEvent";
import FullScheduleSlotLabel from "./FullScheduleSlotLabel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScheduleEventInputType } from "@/types/fullCalendar.types";
import { DayHeaderContentArg } from "@fullcalendar/core/index.js";
import "./FullSchedule.scss";

const FullSchedule = ({ events }: { events: ScheduleEventInputType[] }) => {
   const scheduleRef = useRef<FullCalendar>(null);
   const [currentDay, setCurrentDay] = useState<string | null>(null);
   const [newEvents, setNewEvents] = useState(events);
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
   const filteredEvents = useCallback(
      (day: string | null) => {
         if (day) {
            const currentWeekday = new Date(day).getDay();
            const allFilteredEvents = events.filter((item) => {
               if (item.daysOfWeek) {
                  return (item.daysOfWeek as number[]).some(
                     (day) => day === currentWeekday
                  );
               } else if (item.start) {
                  return (
                     new Date(item.start as string)
                        .toISOString()
                        .split("T")[0] ===
                     new Date(day).toISOString().split("T")[0]
                  );
               }
            });
            return allFilteredEvents.map((event) => {
               if (event.daysOfWeek) {
                  return { ...event, daysOfWeek: [currentWeekday] };
               }
               return event;
            });
         }
         return events;
      },
      [events]
   );
   const configCalendar = useCallback(() => {
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
               const calendarCurrentDay = calendarApi.getDate().toString();
               setCurrentDay(calendarCurrentDay);
               setNewEvents(filteredEvents(calendarCurrentDay));
            } else {
               setCurrentDay(null);
               setNewEvents(filteredEvents(null));
            }
         }
      }
   }, [filteredEvents]);
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
            const calendarCurrentDay = date.toString();
            setCurrentDay(calendarCurrentDay);
            setNewEvents(filteredEvents(calendarCurrentDay));
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
   useLayoutEffect(() => {
      let throttled = false;
      console.log("layout effect");
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
   }, [configCalendar]);
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
            events={newEvents}
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
