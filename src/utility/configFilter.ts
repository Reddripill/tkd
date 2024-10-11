import {
   IFilter,
   IFilterOption,
} from "@/components/screens/schedule/filters/filters.data";

export const configFilter = (
   filter: IFilter[],
   filterName: string,
   value: IFilterOption
) => {
   const configuredFilter = filter.map((item) => {
      if (item.filterName === filterName) {
         item.value = [value];
      }
      return item;
   });
   return configuredFilter;
};
