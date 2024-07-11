import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/utils/lib"

interface DatePickProps {
    setFormattedDate: (date: string) => void,
    formattedDate: string
    }


const DatePick = (
    {setFormattedDate,formattedDate}: DatePickProps
) => {
    function formatDate(dateString: string | number | Date) {
        // Create a new Date object from the date string
        const date = new Date(dateString);
      
        // Extract the year and month from the Date object
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are zero-indexed
      
        // Format the date as "YYYY-MM"
        return `${year}-${month}`;
      }
      
      const [date, setDate] = useState<Date>()
      console.log(date,"daete");
      useEffect(() => {
        setFormattedDate(formatDate(date?.toISOString() || ""));
      }, [date]);
      console.log(formattedDate, "formattedDateweeee");
  return (
    <div>
        <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal  ",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          
        />
      </PopoverContent>
    </Popover>

    </div>
  )
}

export default DatePick