import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "../ui/calendar";
import React from "react";
import { Label } from "../ui/label";

interface DateRangeProps {}

export function DateRange({}: DateRangeProps) {
  const [toDate, setToDate] = React.useState<Date | undefined>(new Date());
  const [fromDate, setFromDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex gap-4 items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">From</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <Calendar
              mode="single"
              selected={toDate}
              onSelect={setToDate}
              className="rounded-md border"
            />
          </PopoverContent>
        </Popover>
        <Label htmlFor="terms">{toDate?.toDateString()}</Label>
      </div>
      <div className="flex gap-4 items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">To</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <Calendar
              mode="single"
              selected={fromDate}
              onSelect={setFromDate}
              className="rounded-md border"
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
            />
          </PopoverContent>
        </Popover>
        <Label htmlFor="terms">{fromDate?.toDateString()}</Label>
      </div>
    </div>
  );
}
