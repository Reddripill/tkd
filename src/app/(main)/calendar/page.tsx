import React from "react";
import { Metadata } from "next";
import CalendarEvents from "@/components/screens/calendar/calendarEvents/CalendarEvents";
import Calendar from "@/components/screens/calendar/fullCalendar/Calendar";

export const metadata: Metadata = {
   title: "Календарный план",
};

const CalendarPage = () => {
   return (
      <div className="screen">
         <div className="container">
            {/* <div className="md:mb-16 mb-10">
            </div> */}
            <Calendar />
            {/* <CalendarEvents /> */}
         </div>
      </div>
   );
};

export default CalendarPage;
