import React from "react";
import styles from "./MapSearch.module.scss";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { clubList, IClub } from "../clubs.data";
import cn from "classnames";
import AutoComplete from "@/components/UI/autocomplete/Autocomplete";

interface IProps<T = IClub> {
   value: T;
   handleChangeValue: (val: IClub) => void;
   className?: string;
}

const MapSearch = ({ value, handleChangeValue, className }: IProps) => {
   return (
      <div className={cn(styles.wrapper, className)}>
         <div className={cn(styles.container, className)}>
            <div className={styles.search}>
               <div className={styles["select-label"]}>Выберите клуб</div>
               <AutoComplete
                  value={value}
                  handleChangeValue={handleChangeValue}
                  options={clubList}
               />
            </div>
            {value && (
               <div className={styles.club}>
                  <div className={styles.info}>
                     <div className="md:mb-6 mb-3">
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
                     <Link href={`/schedule/${value.id}`}>Расписание</Link>
                     <MoveRight />
                  </button>
               </div>
            )}
         </div>
      </div>
   );
};

export default MapSearch;
