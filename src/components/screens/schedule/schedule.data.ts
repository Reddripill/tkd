import { ScheduleEventInputType } from "@/types/fullCalendar.types";

export const scheduleEvents: ScheduleEventInputType[] = [
   {
      id: "1",
      title: "First Event",
      start: "2024-09-30",
      startTime: "8:00",
      endTime: "9:00",
      daysOfWeek: [1, 3, 5],
      hall: 1,
   },
   {
      id: "2",
      title: "Second Event",
      start: "2024-10-01",
      startTime: "9:00",
      endTime: "19:00",
      daysOfWeek: [0, 2, 4, 6],
      hall: 3,
   },
   {
      id: "3",
      title: "Third Event",
      start: "2024-09-30",
      startTime: "8:00",
      endTime: "9:00",
      daysOfWeek: [1, 3, 5],
      hall: 1,
   },
   {
      id: "4",
      title: "Other Event",
      start: "2024-09-30",
      startTime: "8:00",
      endTime: "9:00",
      daysOfWeek: [1],
      hall: 5,
   },
   {
      id: "5",
      title: "Test Event",
      start: "2024-09-30",
      startTime: "10:00",
      endTime: "20:00",
      daysOfWeek: [1, 2, 4],
      hall: 5,
   },
   {
      id: "6",
      title: "TKD Event",
      start: "2024-09-30",
      startTime: "11:00",
      endTime: "19:00",
      daysOfWeek: [1, 2, 3, 4, 5, 6],
      hall: 5,
   },
];