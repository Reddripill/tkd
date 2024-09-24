import React from "react";
import styles from "./FullMap.module.scss";
import YMap from "./YMap";

const FullMap = () => {
   return (
      <section className={styles.wrapper}>
         <div className="container">
            <div className="title-h1">Карта клубов</div>
         </div>
         <YMap />
      </section>
   );
};

export default FullMap;
