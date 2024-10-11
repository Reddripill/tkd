import React, { useState } from "react";
import { MapPin } from "lucide-react";
import CustomModal from "@/components/UI/modal/CustomModal";
import styles from "./Schedule.module.scss";
import { Autocomplete, TextField } from "@mui/material";
import { clubList, IClub } from "../home/fullmap/clubs.data";
import { usePathname, useRouter } from "next/navigation";

const ScheduleSelect = () => {
   const router = useRouter();
   const pathname = usePathname();
   const [isOpen, setIsOpen] = useState(false);
   const handleOpen = () => setIsOpen(true);
   const [value, setValue] = useState<IClub>(clubList[0]);
   const handleClose = () => setIsOpen(false);
   const handleChangeValue = (val: IClub) => {
      setValue(val);
   };
   const handleClick = () => {
      handleClose();
      router.push(`${pathname}/${value.id}`);
   };
   return (
      <>
         <button type="button" className={styles.filter} onClick={handleOpen}>
            <MapPin size={16} />
            <div className={styles["btn-text"]}>Выбрать клуб</div>
         </button>
         <CustomModal
            title="Выберите клуб"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            className=""
         >
            <div>
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
                     height: "54px",
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
                     <TextField {...params} size="small" />
                  )}
               />
               <button
                  type="button"
                  className={styles.button}
                  onClick={handleClick}
               >
                  Применить
               </button>
            </div>
         </CustomModal>
      </>
   );
};

export default ScheduleSelect;
