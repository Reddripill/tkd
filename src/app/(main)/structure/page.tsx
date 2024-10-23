import StructureScreen from "@/components/screens/structure/StructureScreen";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
   title: "Структура организации",
};
const StructurePage = () => {
   return <StructureScreen />;
};

export default StructurePage;
