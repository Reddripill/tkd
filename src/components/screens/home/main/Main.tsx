import React from "react";
import styles from "./Main.module.scss";
import cn from "classnames";
import Link from "next/link";
import MainBg from "./MainBg";

const Main = () => {
   return (
      <section className={cn("section", styles.wrapper)}>
         <div className={styles.container}>
            <div className={styles.content}>
               <div className={cn("title-h1", styles.title)}>
                  Федерация Тхэквондо ГТФ Республики Татарстан
               </div>
               <div
                  className="md:text-lg text-base text-white md:max-w-[50%]
               mb-8 max-w-[350px]"
               >
                  ФТРТ - амбициозная, быстро развивающаяся, аккредитованная
                  организация, обладающая исключительным правом развивать
                  тхэквондо ГТФ на территории Республики Татарстан.
               </div>
               <button
                  className="text-white md:text-base text-sm font-bold bg-darkBlue
                  md:px-6 px-4 md:h-12 h-10 transition-colors hover:bg-transparent border-4
                  border-darkBlue"
               >
                  <Link href="/record">Узнать больше</Link>
               </button>
            </div>
            <MainBg />
         </div>
      </section>
   );
};

export default Main;
