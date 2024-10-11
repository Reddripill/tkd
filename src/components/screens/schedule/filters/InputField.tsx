import React from "react";
import { IFilter, IFilterOption } from "./filters.data";
import { SetStateType } from "@/types/main.types";
import { Autocomplete, TextField } from "@mui/material";
import { clubList } from "../../home/fullmap/clubs.data";

interface IProps {
   filterItem: IFilter;
   setFilter: SetStateType<IFilter[]>;
}

const InputField = ({ filterItem, setFilter }: IProps) => {
   const handleChangeValue = (val: string) => {
      const clubOption = clubList.find((item) => item.label === val);
      if (clubOption) {
         setFilter((prevState) =>
            prevState.map((item) =>
               item.type === filterItem.type && item.name === filterItem.name
                  ? {
                       ...item,
                       value: [
                          { label: clubOption.label, value: clubOption.id },
                       ],
                    }
                  : item
            )
         );
      }
   };
   return (
      <>
         <Autocomplete
            value={filterItem.value[0]?.label || ""}
            onChange={(e: any, newValue: string) => {
               if (newValue) handleChangeValue(newValue);
            }}
            disablePortal
            fullWidth
            clearOnBlur
            handleHomeEndKeys
            options={filterItem.options?.map((item) => item.label) as string[]}
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
