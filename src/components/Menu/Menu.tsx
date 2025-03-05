import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Dropdown } from "../Dropdown/Dropdown";
import { categories, language } from "@/constant";
import { DateRange } from "../DateRange/DateRange";
import React from "react";

interface MenuProps {}

function Menu({}: MenuProps) {
  const [itemSelected, setItemSelected] = React.useState<String>('');
  

  const applyFilter=()=>{

  }

  return (
    <Sheet>
      <SheetTrigger className="text-base font-semibold">Filter</SheetTrigger>
      <SheetContent side={"right"} className="bg-zinc-200 w-96 flex flex-col">
        <SheetHeader>
          <SheetTitle>Add Filters</SheetTitle>
        </SheetHeader>
        <Dropdown listItems={language} />
        <Dropdown listItems={categories} />
        <DateRange />
        <SheetFooter>
          <SheetClose asChild>
            <Button>Apply</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Menu;
