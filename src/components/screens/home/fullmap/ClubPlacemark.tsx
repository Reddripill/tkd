import React, { useState, useEffect } from "react";
import { Placemark } from "@pbe/react-yandex-maps";
import { IClub } from "./clubs.data";
import ClubPopup from "./mapSearch/ClubPopup";

interface IProps {
   clubItem: IClub;
   value: IClub;
   handleClickPlacemark: (item: IClub) => void;
   handleChangeValue: (item: IClub) => void;
   isMobile: boolean;
}

const ClubPlacemark = ({
   clubItem,
   handleClickPlacemark,
   isMobile,
   value,
   handleChangeValue,
}: IProps) => {
   const [isShowPopup, setIsShowPopup] = useState(false);
   const handleClick = () => {
      handleClickPlacemark(clubItem);
      if (isMobile) setIsShowPopup(true);
   };
   useEffect(() => {
      if (!isMobile && isShowPopup) {
         setIsShowPopup(false);
      }
   }, [isMobile, isShowPopup]);
   return (
      <div>
         <Placemark geometry={clubItem.coords} onClick={handleClick} />
         {isMobile && (
            <ClubPopup
               value={value}
               handleChangeValue={handleChangeValue}
               isShow={isShowPopup}
               setIsShow={setIsShowPopup}
            />
         )}
      </div>
   );
};

export default ClubPlacemark;
