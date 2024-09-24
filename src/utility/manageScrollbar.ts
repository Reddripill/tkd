export const removeScrollbar = (func: () => void) => {
   const scrollbarWidth = window.innerWidth - document.body.clientWidth;
   func();
   if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
   }
};

export const restoreScrollbar = (func: () => void) => {
   func();
   document.body.style.overflow = "unset";
   document.body.style.paddingRight = "0px";
};
