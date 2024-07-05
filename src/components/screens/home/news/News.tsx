"use client";
import React from "react";
import Cart from "../cart/Cart";
import { cartData } from "../cart/cart.data";
import Slider from "@/components/UI/slider/Slider";
import styles from "./News.module.scss";

const News = () => {
   return (
      <section className="section">
         <div className="container">
            <div className="title-h1">Актуальные новости</div>
            <Slider>
               {cartData.map((cart) => (
                  <Cart key={cart.alt} {...cart} />
               ))}
            </Slider>
         </div>
      </section>
   );
};

export default News;
