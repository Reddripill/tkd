export const transformTime = (time: string) => {
   const timeArr = time.split(":");
   const transformedTimeArr = timeArr.map((item) => {
      if (item.length < 2) {
         return "0" + item;
      }
      return item;
   });
   return transformedTimeArr.join(":");
};
