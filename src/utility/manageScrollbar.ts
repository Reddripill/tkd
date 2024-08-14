export const removeScrollbar = (func: () => void) => {
   func();
   if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
   }
};

export const restoreScrollbar = (func: () => void) => {
   func();
   document.body.style.overflow = "unset";
};
