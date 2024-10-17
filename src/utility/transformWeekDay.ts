export const transformWeekDay = (date: number) => {
   return date === 0 ? 6 : date - 1;
};
