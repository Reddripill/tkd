import React from "react";
import { Metadata } from "next";
import CalendarEvents from "@/components/screens/calendar/CalendarEvents";
import Calendar from "@/components/UI/fullCalendar/Calendar";

export const metadata: Metadata = {
   title: "Календарный план",
};

const CalendarPage = () => {
   return (
      <div className="md:py-16 py-10">
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
