"use client";
import React from "react";
import Card from "../card/Card";
import { cardData } from "../card/card.data";
import Slider from "@/components/UI/slider/Slider";

const News = () => {
   return (
      <section className="section">
         <div className="container">
            <div className="title-h1">Актуальные новости</div>
            <Slider>
               {cardData.map((card) => (
                  <Card key={card.id} {...card} />
               ))}
            </Slider>
         </div>
      </section>
   );
};

export default News;
