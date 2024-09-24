import React, { useState } from "react";
import styles from "./MapSearch.module.scss";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { TextField, Autocomplete } from "@mui/material";
import { clubList } from "../clubs.data";

const MapSearch = () => {
   /* const [text, setText] = useState("");
   const [value, setValue] = useState<string | null>(null); */
   return (
      <div className={styles.wrapper}>
         <div className={styles.container}>
            <div className={styles.search}>
               <Autocomplete
                  disablePortal
                  options={clubList}
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
            <div className={styles.club}>
               <div className={styles.info}>
                  <div className="mb-6">
                     <div className={styles.title}>TKD</div>
                     <div className={styles.adress}>Yamashev st. 61</div>
                  </div>
                  <div className={styles.contacts}>
                     <div className={styles.label}>Контакты клуба:</div>
                     <div className={styles.contact}>+7(843)557-74-37</div>
                     <div className={styles.contact}>test@mail.ru</div>
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
         </div>
      </div>
   );
};

export default MapSearch;
