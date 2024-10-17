import React from "react";
import { Checkbox } from "@mui/material";
import { SetStateType } from "@/types/main.types";
import { IFilter, IFilterOption } from "./filters.data";
import styles from "./ScheduleFilters.module.scss";

interface IProps {
   setFilter: SetStateType<IFilter[]>;
   filterItem: IFilter;
}

const CheckboxField = ({ setFilter, filterItem }: IProps) => {
   const getIsChecked = (filterItem: IFilter, option: string | number) => {
      return Boolean(filterItem.value.find((item) => item.value === option));
   };
   const handleIsChecked = (filterItem: IFilter, option: IFilterOption) => {
      const isChecked = getIsChecked(filterItem, option.value);
      setFilter((prevState) =>
         prevState.map((item) => {
            if (
               item.type === filterItem.type &&
               item.filterName === filterItem.filterName
            ) {
               return {
                  ...item,
                  value: isChecked
                     ? item.value.filter((i) => i.value !== option.value)
                     : [...item.value, option],
               };
            }
            return item;
         })
      );
   };
   return (
      <>
         {filterItem.options?.map((item) => (
            <div key={item.value} className={styles["checkbox-item"]}>
               <Checkbox
                  checked={getIsChecked(filterItem, item.value)}
                  onChange={() => handleIsChecked(filterItem, item)}
                  className={styles.checkbox}
               />
               <div className={styles["checkbox-label"]}>{item.label}</div>
            </div>
         ))}
      </>
   );
};

export default CheckboxField;
