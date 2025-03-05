import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DropdownProps {
  className?: string;
  listItems: string[];
  itemSelected: string;
  setItemSelected: Function;
}

export function Dropdown({
  className,
  listItems,
  itemSelected,
  setItemSelected,
}: DropdownProps) {
  const onDropdownSelect = (item: string) => {
    setItemSelected(item);
  };
  return (
    <Select onValueChange={onDropdownSelect} value={itemSelected}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select.." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {listItems.map((item) => {
            return <SelectItem value={item}>{item}</SelectItem>;
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
