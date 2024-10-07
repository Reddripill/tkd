"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import ruLocale from "@fullcalendar/core/locales/ru";
import { calendarEvents } from "@/components/screens/calendar/calendar.data";
import {
   DayCellContentArg,
   DayCellMountArg,
   EventHoveringArg,
   EventMountArg,
} from "@fullcalendar/core/index.js";
import dayjs from "dayjs";
import "./Calendar.scss";

const Calendar = () => {
   const calendar = useRef<FullCalendar>(null);
   const [apectRatio, setAspectRatio] = useState<number>(1.7);
   const [previousPickedElement, setPreviousPickedElement] =
      useState<HTMLElement | null>(null);
   const handleEventMouseEnter = (info: EventHoveringArg) => {
      const elements = document.querySelectorAll(
         `.fc-event[data-event-id="${info.event.id}"]`
      );
      elements.forEach((el) => el.classList.add("event-hover"));
   };

   const handleEventMouseLeave = (info: EventHoveringArg) => {
      const elements = document.querySelectorAll(
         `.fc-event[data-event-id="${info.event.id}"]`
      );
      elements.forEach((el) => el.classList.remove("event-hover"));
   };
   const handleEventDidMount = (info: EventMountArg) => {
      info.el.setAttribute("data-event-id", info.event.id);
   };
   const handleDateClickEvent = (info: DateClickArg) => {
      const currentMonth = dayjs(info.view.currentStart).get("month");
      const pickedDateMonth = dayjs(info.dateStr).get("month");
      if (currentMonth !== pickedDateMonth) {
         currentMonth - pickedDateMonth < 0
            ? info.view.calendar.next()
            : info.view.calendar.prev();
      }
      const element = document.querySelector(
         `[data-date="${info.dateStr}"]`
      ) as HTMLElement;
      if (element && !element.classList.contains("date-hover")) {
         element.classList.add("date-hover");
         setPreviousPickedElement(element);
         if (previousPickedElement) {
            previousPickedElement.classList.remove("date-hover");
         }
      }
   };
   const handleCellDidMount = (info: DayCellMountArg) => {
      if (info.isToday && !previousPickedElement) {
         setPreviousPickedElement(info.el);
         info.el.classList.add("date-hover");
      }
   };
   const configAspectRatio = () => {
      if (typeof window !== undefined) {
         const width = window.innerWidth;
         if (width > 1100) {
            setAspectRatio(1.7);
         } else if (width > 900) {
            setAspectRatio(1.35);
         } else if (width > 768) {
            setAspectRatio(1.1);
         } else {
            setAspectRatio(1);
         }
      }
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
      <div className="full-calendar">
         <FullCalendar
            ref={calendar}
            plugins={[dayGridPlugin, interactionPlugin]}
            locale={ruLocale}
            initialView="dayGridMonth"
            headerToolbar={{ end: "prev next" }}
            aspectRatio={apectRatio}
            unselectAuto={false}
            dayMaxEventRows={true}
            events={calendarEvents}
            eventMouseEnter={handleEventMouseEnter}
            eventMouseLeave={handleEventMouseLeave}
            eventDidMount={handleEventDidMount}
            dateClick={handleDateClickEvent}
            dayCellDidMount={handleCellDidMount}
         />
      </div>
   );
};

export default Calendar;
