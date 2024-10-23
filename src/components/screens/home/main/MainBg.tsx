"use client";
import React from "react";
import styles from "./Main.module.scss";
import Parallax from "@/components/UI/parallax/Parallax";
import Image from "next/image";

const MainBg = () => {
   return (
      <Parallax>
         <Image
            src="/mainBg.jpg"
            alt="Main Background"
            className={styles.back}
            style={{ objectFit: "cover" }}
            fill
         />
         <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
      </Parallax>
   );
};

export default MainBg;
