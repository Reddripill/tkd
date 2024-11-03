"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRecord, recordSchema } from "./record.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./RecordPopup.module.scss";
import cn from "classnames";
import CustomModal from "@/components/UI/modal/CustomModal";
import { SetStateType } from "@/types/main.types";

interface IProps {
   isOpen: boolean;
   setIsOpen: SetStateType<boolean>;
}

const RecordPopup = ({ isOpen, setIsOpen }: IProps) => {
   const {
      register,
      handleSubmit,
      formState: { errors, isDirty, isValid },
   } = useForm<IRecord>({
      resolver: zodResolver(recordSchema),
      mode: "onTouched",
   });
   const onSubmitHandler: SubmitHandler<IRecord> = () => {
      setIsOpen(false);
   };
   return (
      <CustomModal
         title="Записаться на занятия"
         isOpen={isOpen}
         setIsOpen={setIsOpen}
      >
         <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className={styles.fields}>
               <div
                  className={cn(styles.field, {
                     [styles._error]: errors.name,
                  })}
               >
                  <div className={styles.label}>Введите имя</div>
                  <input
                     type="text"
                     className={styles.input}
                     {...register("name")}
                  />
                  {errors.name && (
                     <p className={styles.error}>{errors.name.message}</p>
                  )}
               </div>
               <div
                  className={cn(styles.field, {
                     [styles._error]: errors.email,
                  })}
               >
                  <div className={styles.label}>Введите почту</div>
                  <input
                     type="email"
                     autoFocus={false}
                     className={styles.input}
                     {...register("email")}
                  />
                  {errors.email && (
                     <p className={styles.error}>{errors.email.message}</p>
                  )}
               </div>
            </div>
            <button
               type="submit"
               className={styles.button}
               disabled={!isDirty || !isValid}
            >
               Записаться
            </button>
         </form>
      </CustomModal>
   );
};

export default RecordPopup;
