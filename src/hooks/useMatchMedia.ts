"use client";
import React, { useState, useEffect } from "react";

export const useMatchMedia = (query: string, initialValue: boolean = false) => {
   const [isMatching, setIsMatching] = useState(initialValue);
   useEffect(() => {
      const watcher = window.matchMedia(query);
      setIsMatching(watcher.matches);
      const handleChangeQuery = (event: MediaQueryListEvent) => {
         setIsMatching(event.matches);
      };
      if (watcher.addEventListener) {
         watcher.addEventListener("change", handleChangeQuery);
      } else {
         // Для устаревших браузеров используем addListener
         watcher.addListener(handleChangeQuery);
      }

      return () => {
         if (watcher.removeEventListener) {
            watcher.removeEventListener("change", handleChangeQuery);
         } else {
            // Для устаревших браузеров используем removeListener
            watcher.removeListener(handleChangeQuery);
         }
      };
   }, [query]);
   return isMatching;
};
