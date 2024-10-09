import React from "react";
import { IFilter } from "./filters.data";
import { SetStateType } from "@/types/main.types";
import { Autocomplete, TextField } from "@mui/material";
import styles from "./ScheduleFilters.module.scss";

interface IProps {
   filterItem: IFilter;
   setFilter: SetStateType<IFilter[]>;
}

const InputField = ({ filterItem, setFilter }: IProps) => {
   const handleChangeValue = (val: string) => {
      setFilter((prevState) =>
         prevState.map((item) =>
            item.type === filterItem.type && item.name === filterItem.name
               ? { ...item, value: val }
               : item
         )
      );
   };
   return (
      <>
         <Autocomplete
            value={filterItem.value as string}
            onChange={(e: any, newValue: string) => {
               if (newValue) handleChangeValue(newValue);
            }}
            disablePortal
            fullWidth
            clearOnBlur
            handleHomeEndKeys
            options={filterItem.options as string[]}
            closeText=""
            openText=""
            disableClearable={true}
            sx={{
               fontSize: "14px",
               "& .MuiInputBase-input": {
                  paddingLeft: "4px !important",
                  fontSize: "14px",
               },
               "& .MuiFormLabel-root": { fontSize: "14px" },
               "& + .MuiPopper-root .MuiAutocomplete-option": {
                  fontSize: "14px",
               },
            }}
            renderInput={(params) => <TextField {...params} size="small" />}
         />
      </>
   );
};

export default InputField;
