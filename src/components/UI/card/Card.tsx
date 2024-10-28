import React, { useState } from "react";
import { IStrucure } from "@/components/screens/structure/structure.data";
import styles from "./Card.module.scss";
import Image from "next/image";
import cn from "classnames";

const Card = ({ person }: { person: IStrucure }) => {
   const [isHovered, setIsHovered] = useState(false);
   return (
      <div
         className={cn(styles.card, { [styles["card_hovered"]]: isHovered })}
         onMouseOver={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <div className={styles.image}>
            <Image src={person.image} alt={person.fullname} fill />
         </div>
         <div className={styles.content}>
            <div className={styles.role}>{person.role}</div>
            <div className={styles.fullname}>{person.fullname}</div>
         </div>
      </div>
   );
};

export default Card;
