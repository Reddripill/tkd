import CustomModal from "@/components/UI/modal/CustomModal";
import { SetStateType } from "@/types/main.types";
import React from "react";
import MapSearch from "./MapSearch";
import { IClub } from "../clubs.data";

interface IProps {
   isShow: boolean;
   setIsShow: SetStateType<boolean>;
   value: IClub;
   handleChangeValue: (item: IClub) => void;
}

const ClubPopup = ({ isShow, setIsShow, handleChangeValue, value }: IProps) => {
   return (
      <CustomModal
         title="Информация о клубе"
         isOpen={isShow}
         setIsOpen={setIsShow}
      >
         <MapSearch
            handleChangeValue={handleChangeValue}
            value={value}
            className="!static !inset-0 !bg-transparent !border-none !shadow-none !p-0 !min-w-0 !w-full"
         />
      </CustomModal>
   );
};

export default ClubPopup;
