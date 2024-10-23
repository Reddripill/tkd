"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface IProps {
   children: React.ReactNode;
   offset?: number;
}

const Parallax = ({ children, offset = -50 }: IProps) => {
   const targetRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
   });
   const value = useTransform(scrollYProgress, [0, 1], [0, offset]);
   return (
      <div
         ref={targetRef}
         className="absolute top-0 left-0 w-full h-full overflow-hidden"
      >
         <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{ y: value }}
         >
            {children}
         </motion.div>
      </div>
   );
};

export default Parallax;
