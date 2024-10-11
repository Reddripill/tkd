import React from "react";
import { Metadata } from "next";
import ScheduleScreen from "@/components/screens/schedule/screens/ScheduleScreen";

export const metadata: Metadata = {
   title: "Расписание",
};

const SchedulePage = () => {
   return <ScheduleScreen />;
};

export default SchedulePage;
