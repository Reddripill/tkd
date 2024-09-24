import React, { useRef, useState } from "react";
import styles from "./MapSearch.module.scss";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import {
   OutlinedInput,
   MenuItem,
   Select,
   TextField,
   Menu,
   ClickAwayListener,
   MenuList,
   Popper,
   Paper,
} from "@mui/material";

const MapSearch = () => {
   const [text, setText] = useState("");
   const [value, setValue] = useState<string | null>(null);
   const [isOpen, setIsOpen] = useState(false);
   const anchorRef = useRef<HTMLInputElement>(null);
   const prevIsOpenRef = useRef(isOpen);
   const handleClick = () => {
      setIsOpen(!isOpen);
   };
   const handleClose = (event: Event | React.SyntheticEvent) => {
      if (
         anchorRef.current &&
         anchorRef.current.contains(event.target as HTMLElement)
      ) {
         return;
      }

      setIsOpen(false);
   };
   const handleChangeValue = (
      event: React.MouseEvent<HTMLLIElement, MouseEvent>
   ) => {
      /* setValue(event.target.value);
      setText(event.target.value);
      handleClose(event); */
   };
   const handleListKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Tab") {
         event.preventDefault();
         setIsOpen(false);
      } else if (event.key === "Escape") {
         setIsOpen(false);
      }
   };

   React.useEffect(() => {
      if (prevIsOpenRef.current === true && isOpen === false) {
         anchorRef.current!.focus();
      }

      prevIsOpenRef.current = isOpen;
   }, [isOpen]);
   return (
      <div className={styles.wrapper}>
         <div className={styles.container}>
            <div className={styles.search}>
               <TextField
                  ref={anchorRef}
                  fullWidth
                  placeholder="Выберите клуб"
                  size="small"
                  value={text}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setText(e.target.value)
                  }
                  onClick={handleClick}
               ></TextField>
               <Popper
                  open={isOpen}
                  anchorEl={anchorRef.current}
                  // role={undefined}
                  popperOptions={{ placement: "bottom" }}
                  disablePortal
                  sx={{ width: "100%", zIndex: 3 }}
               >
                  <Paper>
                     <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                           autoFocusItem={isOpen}
                           id="composition-menu"
                           aria-labelledby="composition-button"
                           onKeyDown={handleListKeyDown}
                        >
                           {/* <MenuItem
                              value=""
                              sx={{ minHeight: "36px" }}
                           ></MenuItem> */}
                           <MenuItem value={10} onClick={handleChangeValue}>
                              Ten
                           </MenuItem>
                           <MenuItem value={20} onClick={handleChangeValue}>
                              Twenty
                           </MenuItem>
                           <MenuItem value={30} onClick={handleChangeValue}>
                              Thirty
                           </MenuItem>
                        </MenuList>
                     </ClickAwayListener>
                  </Paper>
               </Popper>
            </div>
            <div className={styles.club}>
               <div className={styles.info}>
                  <div className="mb-6">
                     <div className={styles.title}>TKD</div>
                     <div className={styles.adress}>Yamashev st. 61</div>
                  </div>
                  <div className={styles.contacts}>
                     <div className={styles.label}>Контакты клуба:</div>
                     <div className={styles.contact}>+7(843)557-74-37</div>
                     <div className={styles.contact}>test@mail.ru</div>
                  </div>
               </div>
               <button
                  className="text-white md:text-base text-sm font-bold bg-darkBlue
                  md:px-4 px-2 md:h-10 h-8 transition-colors hover:bg-transparent border-2
                  border-darkBlue flex items-center gap-x-2 hover:text-darkBlue"
               >
                  <Link href="/">Расписание</Link>
                  <MoveRight />
               </button>
            </div>
         </div>
      </div>
   );
};

export default MapSearch;
