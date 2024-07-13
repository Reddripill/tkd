"use client";
import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ruLocale from "@fullcalendar/core/locales/ru";
import "./Calendar.scss";

const Calendar = () => {
   const calendar = useRef<FullCalendar>(null);
   return (
      <div>
         <FullCalendar
            ref={calendar}
            plugins={[dayGridPlugin, interactionPlugin]}
            locale={ruLocale}
            initialView="dayGridMonth"
            headerToolbar={{ end: "prev next" }}
            contentHeight={"auto"}
            events={[
               { title: "First Event", start: "2024-07-12" },
               { title: "Second Event", start: "2024-07-13" },
            ]}
         />
      </div>
   );
};

export default Calendar;
