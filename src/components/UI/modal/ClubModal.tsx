import React, { useState } from "react";
import { MapPin } from "lucide-react";
import CustomModal from "@/components/UI/modal/CustomModal";
import styles from "./CustomModal.module.scss";
import { clubList, IClub } from "@/components/screens/home/fullmap/clubs.data";
import { usePathname, useRouter } from "next/navigation";
import { SetStateType } from "@/types/main.types";
import AutoComplete from "../autocomplete/Autocomplete";

interface IProps {
   value: IClub;
   setValue: SetStateType<IClub>;
}

const ClubModal = ({ value, setValue }: IProps) => {
   const router = useRouter();
   const pathname = usePathname();
   const [isOpen, setIsOpen] = useState(false);
   const handleOpen = () => setIsOpen(true);
   const handleClose = () => {
      const basePath = pathname.split("/").slice(0, 2).join("/");
      setIsOpen(false);
      router.push(`${basePath}/${value.id}`);
   };
   const handleChangeValue = (val: IClub) => {
      setValue(val);
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
         >
            <div className="mb-6">
               <AutoComplete
                  value={value}
                  handleChangeValue={handleChangeValue}
                  options={clubList}
               />
            </div>
            <div>
               <button
                  type="button"
                  className={styles.button}
                  onClick={handleClose}
               >
                  Применить
               </button>
            </div>
         </CustomModal>
      </>
   );
};

export default ClubModal;
