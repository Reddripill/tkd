import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import styles from "./Autocomplete.module.scss";

interface IProps {
   value: any;
   handleChangeValue: (val: any) => void;
   options: any;
}

const AutoComplete = ({ value, handleChangeValue, options }: IProps) => {
   return (
      <Autocomplete
         value={value}
         onChange={(e: any, newValue: any) => {
            if (newValue) handleChangeValue(newValue);
         }}
         disablePortal
         fullWidth
         clearOnBlur
         handleHomeEndKeys
         closeText=""
         openText=""
         options={options}
         disableClearable={true}
         sx={{
            fontSize: "14px",
            height: "36px",
            "& .MuiFormControl-root": {
               height: "100%",
            },
            "& .MuiInputBase-root": {
               borderRadius: "0px",
               height: "100%",
               alignItems: "center",
            },
            "& .MuiInputBase-root input": {
               alignSelf: "center",
            },
            "& .MuiInputBase-input": {
               paddingLeft: "4px !important",
               fontSize: "14px",
               appearance: "none",
            },
            "& .MuiFormLabel-root": { fontSize: "14px" },
            "& + .MuiPopper-root .MuiAutocomplete-option": {
               fontSize: "14px",
            },
            /* "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#00183C",
               }, */
         }}
         renderInput={(params) => <TextField {...params} size="small" />}
      />
   );
};

export default AutoComplete;
