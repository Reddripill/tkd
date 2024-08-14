"use client";
import React, { useEffect, useRef } from "react";

export const useOutside = <T extends HTMLDivElement>(
   handleClickOutside: () => void
) => {
   const ref = useRef<T>(null);
   useEffect(() => {
      let mouseDownInside = false;

      const mouseDownHandler = (e: MouseEvent) => {
         if (ref.current && ref.current.contains(e.target as Node)) {
            mouseDownInside = true;
         }
      };

      const mouseUpHandler = (e: MouseEvent) => {
         if (mouseDownInside) {
            mouseDownInside = false;
            return;
         }
         if (ref.current && !ref.current.contains(e.target as Node)) {
            handleClickOutside();
         }
      };

      document.addEventListener("mousedown", mouseDownHandler);
      document.addEventListener("mouseup", mouseUpHandler);

      return () => {
         document.removeEventListener("mousedown", mouseDownHandler);
         document.removeEventListener("mouseup", mouseUpHandler);
      };
   }, [ref, handleClickOutside]);
   return ref;
};
