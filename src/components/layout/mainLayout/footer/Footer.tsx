import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import TgIcon from "@/components/UI/icons/TgIcon";
import WhatsappIcon from "@/components/UI/icons/WhatsappIcon";
import Image from "next/image";

const Footer = () => {
   return (
      <div className={styles.footer}>
         <div className="container">
            <div className={styles.wrapper}>
               <Link
                  href="/"
                  className="flex shrink-0 items-center gap-x-4 max-lg:mb-8"
               >
                  <div className="relative shrink-0 size-[70px] max-xl:size-14">
                     <Image src="/tkd-logo.png" alt="TKD LOGO" fill />
                  </div>
                  <div className={styles.label}>
                     Федерация Тхэквондо ГТФ Республики Татарстан
                  </div>
               </Link>
               <div className={styles.information}>
                  <div className={styles.menu}>
                     <Link href="/" className={styles.item}>
                        Главная
                     </Link>
                     <Link href="/calendar" className={styles.item}>
                        Календарный план
                     </Link>
                     <Link href="/structure" className={styles.item}>
                        Структура организации
                     </Link>
                     <Link href="/schedule" className={styles.item}>
                        Расписание
                     </Link>
                  </div>
                  <div className={styles.contacts}>
                     <div className="mb-4">
                        <div className={styles.text}>
                           420111, Россия, Республика Татарстан, г.Казань, ул.
                           Кремлевская, 3
                        </div>
                        <div className={styles.text}>rik.kazan@tatar.ru</div>
                     </div>
                     <div>
                        <div className="text-gray text-sm mb-4">
                           Присоединяйтесь к нам:
                        </div>
                        <div className={styles.socials}>
                           <Link href="/" className={styles.icon}>
                              <TgIcon className="fill-white" />
                           </Link>
                           <Link href="/" className={styles.icon}>
                              <WhatsappIcon className="fill-white" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
