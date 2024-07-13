import Calendar from "@/components/screens/calendar/Calendar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
   title: "Календарный план",
};

const CalendarPage = () => {
   return (
      <div className="md:py-16 py-10">
         <div className="container">
            <Calendar />
         </div>
      </div>
   );
};

export default CalendarPage;
