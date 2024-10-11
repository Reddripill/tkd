export interface IFilter {
   filterName: string;
   label: string;
   options?: IFilterOption[];
   placeholder?: string;
   value: IFilterOption[];
   type: "checkbox" | "input";
}

export type IFilterOption = {
   label: string;
   value: string | number;
};
export const filterData: IFilter[] = [
   {
      filterName: "timesOfDay",
      label: "Время",
      value: [],
      options: [
         { label: "Утро", value: "morning" },
         { label: "День", value: "afternoon" },
         { label: "Вечер", value: "night" },
      ],
      type: "checkbox",
   },
   {
      filterName: "club",
      label: "Клуб",
      value: [],
      options: [
         { label: "TKD", value: "tkd" },
         { label: "TKD num 2", value: "tkd-num-2" },
      ],
      type: "input",
   },
   {
      filterName: "place",
      label: "Место проведения",
      value: [],
      options: [
         { label: "Зал 1", value: 1 },
         { label: "Зал 2", value: 2 },
         { label: "Зал 3", value: 3 },
         { label: "Зал 4", value: 4 },
         { label: "Зал 5", value: 5 },
         { label: "Зал 6", value: 6 },
      ],
      type: "checkbox",
   },
];
