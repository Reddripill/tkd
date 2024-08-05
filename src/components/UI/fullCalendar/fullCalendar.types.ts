import { EventInput } from "@fullcalendar/core/index.js";

export type EventInputType = EventInput &
   Required<Pick<EventInput, "title" | "start" | "id">>;
