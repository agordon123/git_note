import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import React from "react";
import { DayPicker } from "react-day-picker";
import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface EditAvailabilityProps {
  selectedFrom: any;
  handleDaySelectFrom: any;
  selectedTo: any;
  handleDaySelectTo: any;
  control: any;
  register: any;
}
const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
    color:#42BBFF;
    font-size: 140%;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #42BBFF;
    color: bg-black-700;
    background-color:transparent;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color:#42BBFF;
  }
  .my-today:hover {
    color: black;
    font-weight: bold;
    border-color:#42BBFF;

  }
`;
const EditAvailability = ({
  register,
  selectedFrom,
  selectedTo,
  control,
  handleDaySelectFrom,
  handleDaySelectTo,
}: EditAvailabilityProps) => {
  return (
    <section className="border-top  box-border flex flex-col items-start">
      <label className="py-12 text-white-300" htmlFor="availability">
        Schedule and Availability
      </label>

      <div className="flex flex-row gap-2">
        <label htmlFor="newProjects" className="py-[30px]">
          {" "}
          <input
            height={16}
            width={16}
            type="checkbox"
            {...register("newProjects")}
          />
          <span className="paragraph-3-medium text-white-100">
            {" "}
            Are You Available for new projects?
          </span>
        </label>
      </div>
      <div className="flex w-full grow flex-row justify-around gap-x-2">
        <div className="flex w-full flex-col">
          {" "}
          <label className="text-white-100" htmlFor="availability.startTime">
            Start Date{" "}
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="profile-shadow max-w-full grow bg-black-600 text-white-300">
                <Calendar size={16} /> Select Start Time
              </Button>
            </PopoverTrigger>

            <PopoverContent className="z-20 w-full flex-none grow self-stretch rounded-[4px] bg-black-700 text-white-100">
              <Controller
                control={control}
                name="availability.startTime"
                render={({ field: { onChange } }) => (
                  <>
                    <style>{css}</style>
                    <DayPicker
                      key="from"
                      className="bg-black-700 text-white-500"
                      onSelect={(selectedDate) => onChange(selectedDate)}
                      showOutsideDays
                      weekStartsOn={0}
                      modifiersClassNames={{
                        selected: "my-selected",
                        today: "my-today",
                      }}
                      selected={selectedFrom}
                      defaultMonth={new Date()}
                      mode="single"
                      onDayClick={(selectedFrom) => {
                        handleDaySelectFrom(selectedFrom);
                      }}
                    />
                  </>
                )}
              />
            </PopoverContent>
          </Popover>
          <span className="paragraph-4-medium space-y-2 text-white-500">
            Time Set to Local Time
          </span>
          <div>
            <span className="mt-[20px] text-white-100">
              {selectedFrom
                ? format(selectedFrom, "MM/dd/yyyy")
                : "Select start date"}
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <label className="text-white-100" htmlFor="availability.endTime">
            End Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button className=" max-w-full grow bg-black-600 text-white-300">
                <Calendar size={16} /> Select End Time
              </Button>
            </PopoverTrigger>
            <PopoverContent className="z-20  w-full flex-none  self-stretch  rounded-[4px] bg-black-700 text-white-100">
              <Controller
                control={control}
                name="availability.endTime"
                render={({ field: { onChange } }) => (
                  <>
                    <style>{css}</style>{" "}
                    <DayPicker
                      key="to"
                      className="bg-black-700 text-white-500"
                      onSelect={(selectedDate) => onChange(selectedDate)}
                      showOutsideDays
                      weekStartsOn={0}
                      modifiersClassNames={{
                        selected: "my-selected",
                        today: "my-today",
                      }}
                      selected={selectedTo}
                      defaultMonth={new Date()}
                      mode="single"
                      onDayClick={(selectedFrom) => {
                        handleDaySelectTo(selectedFrom);
                      }}
                    />
                  </>
                )}
              />
            </PopoverContent>
          </Popover>
          <span className="paragraph-4-medium space-y-2 text-white-500">
            Time Set to Local Time
          </span>
          <div>
            <span className="mt-[20px] text-white-100">
              {selectedTo
                ? format(selectedTo, "MM/dd/yyyy")
                : "Select end date"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditAvailability;
