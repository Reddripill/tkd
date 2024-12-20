import { EventInput } from "@fullcalendar/core/index.js";

export type EventInputType = EventInput &
   Required<Pick<EventInput, "id" | "title" | "start">>;

type ScheduleEventInfoType = {
   hall?: number;
};

export type ScheduleEventInputType = EventInput &
   ScheduleEventInfoType &
   Required<Pick<EventInput, "id" | "title" | "startTime" | "endTime">>;

export type ScheduleEventType = {
   club_id: string;
   events: ScheduleEventInputType[];
};
