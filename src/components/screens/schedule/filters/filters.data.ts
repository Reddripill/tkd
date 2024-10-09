export interface IFilter {
   name: string;
   options?: string[];
   placeholder?: string;
   value: string | string[];
   type: "checkbox" | "input";
}

export const filterData: IFilter[] = [
   {
      name: "Время",
      value: [],
      options: ["Утро", "День", "Ночь"],
      type: "checkbox",
   },
   {
      name: "Клуб",
      value: "Все",
      options: ["Все", "TKD", "TKD num 2"],
      type: "input",
   },
   {
      name: "Место проведения",
      value: [],
      options: ["Зал 1", "Зал 2", "Зал 3", "Зал 4", "Зал 5", "Зал 6"],
      type: "checkbox",
   },
];
