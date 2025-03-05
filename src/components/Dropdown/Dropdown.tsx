import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { language } from "@/constant";
import React from "react";

interface DropdownProps {
  className?: string;
  listItems: string[];
}

export function Dropdown({ className, listItems }: DropdownProps) {

  const [itemSelected, setItemSelected] = React.useState<String>('');

  const onDropdownSelect = (item: string) =>{
    setItemSelected(item)
  }
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select.." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {listItems.map((item) => {
            return <SelectItem value={item} onClick={()=>{onDropdownSelect(item)}}>{item}</SelectItem>;
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
