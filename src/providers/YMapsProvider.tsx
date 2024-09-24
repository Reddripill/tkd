"use client";
import React from "react";
import { YMaps } from "@pbe/react-yandex-maps";
import { YMapProvider } from "@/interfaces/ymap.interface";

interface IProps extends YMapProvider {
   children: React.ReactNode;
}

export const YMapsProvider = ({ children }: IProps) => {
   return <YMaps>{children}</YMaps>;
};
