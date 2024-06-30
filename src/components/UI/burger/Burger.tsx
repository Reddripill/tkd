"use client";
import React from "react";
import styles from "./Burger.module.scss";
import cn from "classnames";
import { SetStateType } from "@/types/main.types";

interface IProps {
   isShow: boolean;
   setIsShow: SetStateType<boolean>;
}

const Burger = ({ isShow, setIsShow }: IProps) => {
   return (
      <div
         className={cn(styles.burger, { [styles._show]: isShow })}
         onClick={() => setIsShow(!isShow)}
      >
         <span></span>
      </div>
   );
};

export default Burger;
