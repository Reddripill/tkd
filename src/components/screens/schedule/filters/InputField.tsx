import React from "react";
import { IFilter } from "./filters.data";
import { SetStateType } from "@/types/main.types";
import { clubList } from "../../home/fullmap/clubs.data";
import AutoComplete from "@/components/UI/autocomplete/Autocomplete";

interface IProps {
   filterItem: IFilter;
   setFilter: SetStateType<IFilter[]>;
}

const InputField = ({ filterItem, setFilter }: IProps) => {
   const handleChangeValue = (val: string) => {
      const clubOption = clubList.find((item) => item.label === val);
      if (clubOption) {
         setFilter((prevState) =>
            prevState.map((item) =>
               item.type === filterItem.type &&
               item.filterName === filterItem.filterName
                  ? {
                       ...item,
                       value: [
                          { label: clubOption.label, value: clubOption.id },
                       ],
                    }
                  : item
            )
         );
      }
   };
   return (
      <>
         <AutoComplete
            value={filterItem.value[0]?.label || ""}
            handleChangeValue={handleChangeValue}
            options={filterItem.options?.map((item) => item.label)}
         />
      </>
   );
};

export default InputField;
