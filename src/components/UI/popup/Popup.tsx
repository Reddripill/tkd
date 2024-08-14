"use client";
import React from "react";
import { useOutside } from "@/hooks/useOutside";
import { SetStateType } from "@/types/main.types";
import { X as Cross } from "lucide-react";
import styles from "./Popup.module.scss";
import cn from "classnames";
import { restoreScrollbar } from "@/utility/manageScrollbar";

export interface IPopupProps {
   isOpen: boolean;
   setIsOpen: SetStateType<boolean>;
}

interface IProps extends IPopupProps {
   children: React.ReactNode;
}

const Popup = ({ children, isOpen, setIsOpen }: IProps) => {
   const closePopupHandler = () => {
      restoreScrollbar(() => setIsOpen(false));
   };
   const popupRef = useOutside(closePopupHandler);
   return (
      <div className={cn(styles.wrapper, { [styles._open]: isOpen })}>
         <div ref={popupRef} className={styles.container}>
            <div className={styles.cross}>
               <Cross onClick={closePopupHandler} />
            </div>
            <div className={styles.body}>{children}</div>
         </div>
      </div>
   );
};

export default Popup;
