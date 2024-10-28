import StructureScreen from "@/components/screens/structure/StructureScreen";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
   title: "Структура организации",
};
const StructurePage = ({ params }: { params: { club_id?: string } }) => {
   return <StructureScreen club_id={params.club_id} />;
};

export default StructurePage;
