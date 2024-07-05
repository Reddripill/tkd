import React from "react";
import styles from "./Cart.module.scss";
import { ICartData } from "./cart.data";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

interface IProps extends ICartData {
   className?: string;
}

const Cart = ({ date, image, text, title, alt, className }: IProps) => {
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

export default Cart;
