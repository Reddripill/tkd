import React from "react";
import { ICardData } from "./card.data";
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.scss";
import cn from "classnames";

interface IProps extends ICardData {
   className?: string;
}

const Card = ({ date, image, text, title, alt, className }: IProps) => {
   return (
      <div className={cn(styles.cart, className)}>
         <div className="relative w-full pb-[80%]">
            <Image
               alt={alt}
               src={image}
               fill={true}
               style={{ objectFit: "cover" }}
            />
         </div>
         <div className={styles.content}>
            <div className="text-gray text-xs font-medium mb-2">{date}</div>
            <Link href="/" className={styles.title}>
               {title}
            </Link>
            <div className={styles.text}>{text}</div>
         </div>
      </div>
   );
};

export default Card;
