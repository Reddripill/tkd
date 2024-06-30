"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import cn from "classnames";
import Link from "next/link";
import TgIcon from "../icons/TgIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import Burger from "../burger/Burger";

const Header = () => {
   const [isShow, setIsShow] = useState(false);
   const pathname = usePathname();
   const closeMenu = () => {
      setIsShow(false);
   };
   return (
      <header className={styles.header}>
         <div className={styles.wrapper}>
            <div className="container">
               <div className={styles["header-container"]}>
                  <Link href="/" className="flex shrink-0 items-center gap-x-4">
                     <div className="size-[70px] max-xl:size-14 bg-main rounded-full" />
                     <div className={styles.label}>
                        Федерация Тхэквондо ГТФ Республики Татарстан
                     </div>
                  </Link>
                  <div
                     className={cn(styles["menu-wrapper"], {
                        [styles._active]: isShow,
                     })}
                  >
                     <menu className={styles.menu}>
                        <nav className={styles.nav}>
                           <Link
                              href="/"
                              className={cn(styles.item, {
                                 [styles._active]: pathname === "/",
                              })}
                              onClick={closeMenu}
                           >
                              Главная
                           </Link>
                           <Link
                              href="/"
                              className={styles.item}
                              onClick={closeMenu}
                           >
                              Календарный план
                           </Link>
                           <Link
                              href="/structure"
                              className={cn(styles.item, {
                                 [styles._active]:
                                    pathname.includes("structure"),
                              })}
                              onClick={closeMenu}
                           >
                              Структура организации
                           </Link>
                           <Link
                              href="/"
                              className={styles.item}
                              onClick={closeMenu}
                           >
                              Расписание
                           </Link>
                           <Link
                              href="/"
                              className={styles.item}
                              onClick={closeMenu}
                           >
                              Контакты
                           </Link>
                        </nav>
                     </menu>
                     <Link href="/">
                        <button className={styles.button}>Записаться</button>
                     </Link>
                     {/* <div className={styles.socials}>
                        <Link href="/">
                           <div className="bg-[#039BE5] p-[7px] rounded-full">
                              <TgIcon className="fill-white size-4" />
                           </div>
                        </Link>
                        <Link href="/">
                           <div className="bg-[#0CC143] p-[7px] rounded-full box-border">
                              <WhatsappIcon className="fill-white size-4" />
                           </div>
                        </Link>
                     </div> */}
                     <Burger isShow={isShow} setIsShow={setIsShow} />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
