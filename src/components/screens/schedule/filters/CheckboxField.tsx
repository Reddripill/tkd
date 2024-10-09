import React from "react";
import styles from "./ScheduleFilters.module.scss";
import { Checkbox } from "@mui/material";
import { SetStateType } from "@/types/main.types";
import { IFilter } from "./filters.data";

interface IProps {
   setFilter: SetStateType<IFilter[]>;
   filterItem: IFilter;
}

const CheckboxField = ({ setFilter, filterItem }: IProps) => {
   const getIsChecked = (filterItem: IFilter, option: string) => {
      return filterItem.value === option || filterItem.value?.includes(option);
   };
   const handleIsChecked = (filterItem: IFilter, option: string) => {
      const isChecked = getIsChecked(filterItem, option);
      const valueArr = filterItem.value as string[];
      setFilter((prevState) =>
         prevState.map((item) => {
            if (
               item.type === filterItem.type &&
               item.name === filterItem.name
            ) {
               return {
                  ...item,
                  value: isChecked
                     ? valueArr.filter((i) => i !== option)
                     : [...valueArr, option],
               };
            }
            return item;
         })
      );
   };
   return (
      <>
         {filterItem.options?.map((item) => (
            <div key={item} className={styles["checkbox-item"]}>
               <Checkbox
                  value={getIsChecked(filterItem, item)}
                  onChange={() => handleIsChecked(filterItem, item)}
                  className={styles.checkbox}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 22 } }}
               />
               <div className={styles["checkbox-label"]}>{item}</div>
            </div>
         ))}
      </>
   );
};

export default CheckboxField;
