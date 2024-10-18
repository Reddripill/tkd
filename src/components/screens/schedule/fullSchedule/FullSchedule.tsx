import React, {
   useState,
   useRef,
   useLayoutEffect,
   useCallback,
   useEffect,
} from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import ruLocale from "@fullcalendar/core/locales/ru";
import FullScheduleEvent from "./FullScheduleEvent";
import FullScheduleSlotLabel from "./FullScheduleSlotLabel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScheduleEventInputType } from "@/types/fullCalendar.types";
import { DayHeaderContentArg } from "@fullcalendar/core/index.js";
import cn from "classnames";
import "./FullSchedule.scss";

const FullSchedule = ({ events }: { events: ScheduleEventInputType[] }) => {
   const scheduleRef = useRef<FullCalendar>(null);
   const [currentDay, setCurrentDay] = useState<string | null>(null);
   const [newEvents, setNewEvents] = useState(events);
   const [eventSlotHeight, setEventSlotHeight] = useState(100);
   const EVENT_GAP = 8;
   const configCellHeight = () => {
      if (typeof window !== undefined) {
         const width = window.innerWidth;
         if (width > 1400) {
            setEventSlotHeight(100);
         } else if (width > 1024) {
            setEventSlotHeight(140);
         } else {
            setEventSlotHeight(100);
         }
      }
   };
   const filteredEvents = useCallback(
      (day: string | null) => {
         if (day) {
            const currentWeekday = new Date(day).getDay();
            const allFilteredEvents = events.filter((item) => {
               if (item.daysOfWeek) {
                  return (item.daysOfWeek as number[]).some(
                     (day) => day === currentWeekday
                  );
               } else if (item.start) {
                  return (
                     new Date(item.start as string)
                        .toISOString()
                        .split("T")[0] ===
                     new Date(day).toISOString().split("T")[0]
                  );
               }
            });
            return allFilteredEvents.map((event) => {
               if (event.daysOfWeek) {
                  return { ...event, daysOfWeek: [currentWeekday] };
               }
               return event;
            });
         }
         return events;
      },
      [events]
   );
   const configCalendar = useCallback(() => {
      if (typeof window !== undefined) {
         const width = window.innerWidth;
         const calendarApi = scheduleRef.current?.getApi();
         if (calendarApi) {
            if (width >= 1280) {
               calendarApi.setOption("dayHeaderFormat", {
                  weekday: "long",
                  day: "numeric",
                  month: "2-digit",
               });
            }
            if (width >= 1024) {
               calendarApi.setOption("dayHeaderFormat", {
                  weekday: "short",
                  day: "numeric",
                  month: "2-digit",
               });
            } else {
               calendarApi.setOption("dayHeaderFormat", {
                  weekday: "short",
                  day: "numeric",
               });
            }
            if (width < 1024) {
               const calendarCurrentDay = calendarApi.getDate().toString();
               const mobileEvents = filteredEvents(calendarCurrentDay);
               setCurrentDay(calendarCurrentDay);
               setNewEvents(mobileEvents);
            } else {
               setCurrentDay(null);
               setNewEvents(filteredEvents(null));
            }
         }
      }
   }, [filteredEvents]);
   const handlePrevClick = () => {
      const calendarApi = scheduleRef.current?.getApi();
      if (calendarApi) calendarApi.prev();
   };
   const handleNextClick = () => {
      const calendarApi = scheduleRef.current?.getApi();
      if (calendarApi) calendarApi.next();
   };
   const handleDateClick = (date: Date) => {
      if (typeof window !== undefined) {
         const width = window.innerWidth;
         if (width < 1024) {
            const calendarCurrentDay = date.toString();
            setCurrentDay(calendarCurrentDay);
            setNewEvents(filteredEvents(calendarCurrentDay));
         }
      }
   };
   const renderDayHeaders = (arg: DayHeaderContentArg) => {
      const text = arg.text;
      const formatedText = text[0].toUpperCase() + text.slice(1);
      const formatedTextArr = formatedText.split(",");
      const weekdayText = formatedTextArr[0]?.trim();
      const dayText = formatedTextArr[1]?.trim();
      const width = window.innerWidth;
      const getCurrentDay = () => {
         const colHeaderDate = arg.date.toDateString();
         if (currentDay) {
            return colHeaderDate === new Date(currentDay).toDateString();
         } else {
            return colHeaderDate === new Date().toDateString();
         }
      };
      return (
         <div
            key={arg.text}
            className={cn("fc-day-header", {
               ["fc-day-header-current"]: getCurrentDay(),
            })}
            onClick={() => handleDateClick(arg.date)}
         >
            {width >= 1024 ? (
               <>{formatedText}</>
            ) : (
               <div className="fc-col-header-day-cell">
                  <div className="fc-col-header-weekday">{weekdayText}</div>
                  <div className="fc-col-header-day">{dayText}</div>
               </div>
            )}
         </div>
      );
   };
   useLayoutEffect(() => {
      let throttled = false;
      const handleResize = () => {
         if (!throttled) {
            configCellHeight();
            configCalendar();
            throttled = true;
            setTimeout(function () {
               throttled = false;
            }, 250);
         }
      };
      configCellHeight();
      configCalendar();
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [configCalendar]);
   useEffect(() => {
      if (typeof window !== undefined) {
         const width = window.innerWidth;
         const calendarApi = scheduleRef.current?.getApi();
         const contentHeight =
            newEvents.length * eventSlotHeight +
            (newEvents.length - 1) * EVENT_GAP +
            150;
         if (calendarApi) {
            if (width < 1024) {
               calendarApi.setOption("height", undefined);
               calendarApi.setOption("contentHeight", contentHeight);
            } else {
               calendarApi.setOption("height", "auto");
            }
         }
      }
   }, [newEvents, eventSlotHeight]);
   return (
      <div className="full-schedule">
         <FullCalendar
            ref={scheduleRef}
            eventMinHeight={eventSlotHeight}
            plugins={[timeGridPlugin]}
            initialView="timeGridWeek"
            locale={ruLocale}
            slotLabelFormat={{ hour: "2-digit", minute: "2-digit" }}
            slotLabelContent={(event) => {
               return (
                  <FullScheduleSlotLabel
                     eventSlotHeight={eventSlotHeight}
                     schedule={events}
                     gap={EVENT_GAP}
                     {...event}
                  />
               );
            }}
            allDaySlot={false}
            dayHeaderContent={renderDayHeaders}
            slotMinTime="08:00"
            slotDuration="1:00:00"
            events={newEvents}
            headerToolbar={false}
            /* eventClassNames={(event) => {
               const daysOfWeek = event.event.extendedProps.daysOfWeek;
               if (currentDay) {
                  let isCurrentDay = false;
                  if (daysOfWeek) {
                     isCurrentDay = (daysOfWeek as number[]).some(
                        (day) => day === new Date(currentDay).getDay()
                     );
                  } else if (event.event.start) {
                     isCurrentDay =
                        new Date(event.event.start)
                           .toISOString()
                           .split("T")[0] ===
                        new Date(currentDay).toISOString().split("T")[0];
                  }
                  return isCurrentDay ? "fc-day-current" : "";
               }
               return "";
            }} */
            eventContent={(event) => {
               return (
                  <FullScheduleEvent
                     gap={EVENT_GAP}
                     eventSlotHeight={eventSlotHeight}
                     schedule={newEvents}
                     isMobile={!!currentDay}
                     {...event}
                  />
               );
            }}
         />
         <div className="fc-schedule-manipulate">
            <div
               className="fc-schedule-button fc-schedule-button__prev"
               onClick={handlePrevClick}
            >
               <ChevronLeft size={24} />
            </div>
            <div
               className="fc-schedule-button fc-schedule-button__next"
               onClick={handleNextClick}
            >
               <ChevronRight size={24} />
            </div>
         </div>
      </div>
   );
};

export default FullSchedule;
