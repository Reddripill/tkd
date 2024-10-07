import React from "react";
import styles from "./MapSearch.module.scss";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { TextField, Autocomplete } from "@mui/material";
import { clubList, IClub } from "../clubs.data";

interface IProps<T = IClub> {
   value: T;
   handleChangeValue: (val: IClub) => void;
}

const MapSearch = ({ value, handleChangeValue }: IProps) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.container}>
            <div className={styles.search}>
               <Autocomplete
                  value={value}
                  onChange={(e: any, newValue: IClub) => {
                     if (newValue) handleChangeValue(newValue);
                  }}
                  disablePortal
                  fullWidth
                  clearOnBlur
                  handleHomeEndKeys
                  options={clubList}
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
                  renderInput={(params) => (
                     <TextField
                        {...params}
                        size="small"
                        label="Выберите клуб"
                     />
                  )}
               />
            </div>
            {value && (
               <div className={styles.club}>
                  <div className={styles.info}>
                     <div className="mb-6">
                        <div className={styles.title}>{value.label}</div>
                        <div className={styles.adress}>{value.adress}</div>
                     </div>
                     <div className={styles.contacts}>
                        <div className={styles.label}>Контакты клуба:</div>
                        <div className={styles.contact}>
                           {value.contacts.phone}
                        </div>
                        <div className={styles.contact}>
                           {value.contacts.email}
                        </div>
                     </div>
                  </div>
                  <button
                     className="text-white md:text-base text-sm font-bold bg-darkBlue
                  md:px-4 px-2 md:h-10 h-8 transition-colors hover:bg-transparent border-2
                  border-darkBlue flex items-center gap-x-2 hover:text-darkBlue"
                  >
                     <Link href="/">Расписание</Link>
                     <MoveRight />
                  </button>
               </div>
            )}
         </div>
      </div>
   );
};

export default MapSearch;
