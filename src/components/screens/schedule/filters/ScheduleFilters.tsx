import React, { useState } from "react";
import { SlidersHorizontal, X as CloseIcon } from "lucide-react";
import { Modal } from "@mui/material";
import { IFilter } from "./filters.data";
import CheckboxField from "./CheckboxField";
import InputField from "./InputField";
import { SetStateType } from "@/types/main.types";
import styles from "./ScheduleFilters.module.scss";
import cn from "classnames";

interface IProps {
   setFilter: SetStateType<IFilter[]>;
   filter: IFilter[];
}

const ScheduleFilters = ({ filter, setFilter }: IProps) => {
   const [isOpen, setIsOpen] = useState(true);
   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);
   const handleApplyFilters = () => {};
   return (
      <>
         <button type="button" className={styles.filter} onClick={handleOpen}>
            <SlidersHorizontal size={16} />
            <div className={styles.text}>Фильтры</div>
         </button>
         <Modal
            open={isOpen}
            onClose={handleClose}
            sx={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <div className={styles.wrapper}>
               <div className={styles.head}>
                  <div className={cn("title-h1", styles.title)}>
                     Уточните расписание занятий
                  </div>
                  <div className={styles.close} onClick={handleClose}>
                     <CloseIcon />
                  </div>
               </div>
               <div className={styles.body}>
                  <div className={styles.main}>
                     {filter.map((filterItem) => (
                        <div
                           key={filterItem.name}
                           className={styles["filter-item"]}
                        >
                           <div className={styles["filter-name"]}>
                              {filterItem.name}
                           </div>
                           {filterItem.type === "checkbox" ? (
                              <div className={styles["filter-checkbox-field"]}>
                                 <CheckboxField
                                    filterItem={filterItem}
                                    setFilter={setFilter}
                                 />
                              </div>
                           ) : (
                              <div className={styles["filter-input-field"]}>
                                 <InputField
                                    filterItem={filterItem}
                                    setFilter={setFilter}
                                 />
                              </div>
                           )}
                        </div>
                     ))}
                  </div>
                  <div className={styles.actions}>
                     <button
                        type="button"
                        className={cn(styles.button, styles["button-apply"])}
                     >
                        Применить
                     </button>
                     <button
                        type="button"
                        className={cn(styles.button, styles["button-cancel"])}
                     >
                        Сбросить
                     </button>
                  </div>
               </div>
            </div>
         </Modal>
      </>
   );
};

export default ScheduleFilters;
