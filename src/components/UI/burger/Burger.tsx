"use client";
import React from "react";
import styles from "./Burger.module.scss";
import cn from "classnames";
import { SetStateType } from "@/types/main.types";
import { removeScrollbar, restoreScrollbar } from "@/utility/manageScrollbar";

interface IProps {
   isShow: boolean;
   setIsShow: SetStateType<boolean>;
}

const Burger = ({ isShow, setIsShow }: IProps) => {
   const clickHandler = () => {
      if (isShow) {
         restoreScrollbar(() => setIsShow(false));
      } else {
         removeScrollbar(() => setIsShow(true));
      }
   };
   return (
      <div
         className={cn(styles.burger, { [styles._show]: isShow })}
         onClick={clickHandler}
      >
         <span></span>
      </div>
   );
};

export default Burger;
