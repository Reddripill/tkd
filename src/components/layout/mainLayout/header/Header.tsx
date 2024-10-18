"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Burger from "@/components/UI/burger/Burger";
import Link from "next/link";
import cn from "classnames";
import styles from "./Header.module.scss";
import Image from "next/image";
import { restoreScrollbar } from "@/utility/manageScrollbar";
import RecordPopup from "../recordPopup/RecordPopup";

const Header = () => {
   const [isShow, setIsShow] = useState(false);
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const pathname = usePathname();
   const closeMenu = () => {
      restoreScrollbar(() => setIsShow(false));
   };
   const scrollToBottom = () => {
      const top = document.body.scrollHeight;
      closeMenu();
      window.scroll({
         top,
         behavior: "smooth",
      });
   };
   return (
      <header className={styles.header}>
         <div className={styles.wrapper}>
            <div className="container">
               <div className={styles["header-container"]}>
                  <Link href="/" className="flex shrink-0 items-center gap-x-4">
                     <div className="relative size-[70px] max-xl:size-14">
                        <Image fill src="/tkd-logo.png" alt="TKD LOGO" />
                     </div>
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
                              href="/calendar"
                              className={cn(styles.item, {
                                 [styles._active]:
                                    pathname.includes("calendar"),
                              })}
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
                              href="/schedule"
                              className={cn(styles.item, {
                                 [styles._active]:
                                    pathname.includes("schedule"),
                              })}
                              onClick={closeMenu}
                           >
                              Расписание
                           </Link>
                           <button
                              className={styles.item}
                              onClick={scrollToBottom}
                           >
                              Контакты
                           </button>
                        </nav>
                     </menu>
                     <div>
                        <button
                           onClick={() => setIsPopupOpen(true)}
                           className={styles.button}
                        >
                           Записаться
                        </button>
                        <RecordPopup
                           isOpen={isPopupOpen}
                           setIsOpen={setIsPopupOpen}
                        />
                     </div>
                     <Burger isShow={isShow} setIsShow={setIsShow} />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
