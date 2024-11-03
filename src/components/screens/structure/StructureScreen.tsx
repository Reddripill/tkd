"use client";
import React, { useState } from "react";
import ClubSelect from "@/components/UI/modal/ClubModal";
import { IStrucure, structureData } from "./structure.data";
import Card from "@/components/UI/card/Card";
import styles from "./StructureScreen.module.scss";
import { clubList, IClub } from "../home/fullmap/clubs.data";

const StructureScreen = ({ club_id }: { club_id?: string[] }) => {
   const [value, setValue] = useState<IClub>(getCurrentValue());
   const founderArr = new Array(3).fill(structureData[0]) as IStrucure[];
   const coachArr = new Array(8).fill(structureData[1]) as IStrucure[];
   const filteredCoachArr = coachArr.filter((item) => {
      if (club_id) {
         return item.club_id === club_id[0];
      }
      return true;
   });
   function getCurrentValue() {
      if (club_id) {
         const selectedClub = clubList.find((club) => club.id === club_id[0]);
         if (selectedClub) return selectedClub;
      }
      return clubList[0];
   }
   return (
      <div className="screen">
         <div className="section">
            <div className="container">
               <div className={styles.head}>
                  <div className={styles["head-content"]}>
                     <div className="title-h1">Структура организации</div>
                     <ClubSelect value={value} setValue={setValue} />
                  </div>
               </div>
               <div className={styles.content}>
                  <div className={styles.founders}>
                     {founderArr.map((founder, index) => (
                        <Card
                           key={index + founder.id.toString()}
                           person={founder}
                        />
                     ))}
                  </div>
                  <div className={styles.coaches}>
                     {filteredCoachArr.map((coach, index) => (
                        <Card
                           key={index + coach.id.toString()}
                           person={coach}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default StructureScreen;
