"use client";
import React, { useRef, HTMLAttributes } from "react";
import SlickSlider, { Settings } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

const PrevArrow: React.FC<HTMLAttributes<HTMLDivElement>> = (attr) => {
   return (
      <div className="prev-arrow" {...attr}>
         <ChevronLeft className="slider-arrow" color="#000" />
      </div>
   );
};

const NextArrow: React.FC<HTMLAttributes<HTMLDivElement>> = (attr) => {
   return (
      <div className="next-arrow" {...attr}>
         <ChevronRight className="slider-arrow" color="#000" />
      </div>
   );
};

const Slider = ({ children }: { children: React.ReactNode }) => {
   const sliderRef = useRef<SlickSlider>(null);
   const settings: Settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
         {
            breakpoint: 1100,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 450,
            settings: {
               slidesToShow: 1.2,
            },
         },
      ],
   };
   return (
      <div className="relative">
         <div className="slider-wrapper">
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <SlickSlider ref={sliderRef} {...settings}>
               {children}
            </SlickSlider>
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
         </div>
      </div>
   );
};

export default Slider;
