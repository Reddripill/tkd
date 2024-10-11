import React from "react";
import ScheduleDynScreen from "@/components/screens/schedule/screens/ScheduleDynScreen";

const ScheduleDynPage = ({ params }: { params: { club_id: string } }) => {
   return <ScheduleDynScreen club_id={params.club_id} />;
};

export default ScheduleDynPage;
