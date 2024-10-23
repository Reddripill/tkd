import React from "react";
import styles from "./CustomModal.module.scss";
import { Fade, Modal } from "@mui/material";
import { SetStateType } from "@/types/main.types";
import { X as CloseIcon } from "lucide-react";
import cn from "classnames";

interface IProps {
   children: React.ReactNode;
   isOpen: boolean;
   setIsOpen: SetStateType<boolean>;
   title: string;
   className?: string;
}

const CustomModal = ({
   isOpen,
   setIsOpen,
   title,
   className,
   children,
}: IProps) => {
   const handleClose = () => setIsOpen(false);
   return (
      <Modal
         open={isOpen}
         onClose={handleClose}
         sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <Fade in={isOpen} timeout={200}>
            <div className={cn(styles.wrapper, className)}>
               <div className={styles.head}>
                  <div className={cn("title-h1", styles.title)}>{title}</div>
                  <div className={styles.close} onClick={handleClose}>
                     <CloseIcon />
                  </div>
               </div>
               <div className={styles.body}>{children}</div>
            </div>
         </Fade>
      </Modal>
   );
};

export default CustomModal;
