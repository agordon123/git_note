import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
import CustomButton from "../../CustomButton";
import Divider from "../../Divider";
interface EditGoalProps {
  goalFields: any;
  removeGoal: (index: number) => void;
  appendGoal: (goal: { name: string; completed: false }) => void;
  register: any;
}
const EditGoals = ({
  goalFields,
  appendGoal,
  removeGoal,
  register,
}: EditGoalProps) => {
  return (
    <section className=" my-10 flex flex-col gap-x-2 space-y-4  border-b-white-500  py-10 ">
      <Divider />
      <div className="align-top">
        <span className="paragraph-3-regular  pb-10 text-white-500">
          LEARNING GOALS
        </span>
      </div>
      <label
        htmlFor="learningGoals"
        className="paragraph-3-regular pt-10 text-white-300"
      >
        {" "}
        Learning Goals
      </label>
      {goalFields.map((field: any, index: number) => (
        <React.Fragment key={field.id}>
          <div
            key={field.id}
            className="paragraph-3-regular flex w-full flex-row content-center items-center justify-between gap-[14px]  bg-black-700 "
          >
            <input
              type="checkbox"
              className="order-1 ml-2 size-6 px-2 accent-green-400 data-[state=checked]:accent-green-400"
              id={`learningGoals[${index}]CB`}
              {...register(`learningGoals[${index}].completed` as any)}
            />
            <Input
              className=" order-2 bg-black-700 text-white-100 accent-green-500 ring-black-700"
              id={`learningGoals[${index}]`}
              placeholder="Enter your goal"
              {...register(`learningGoals[${index}].name` as any)}
            />
            <Button
              type="button"
              className="order-3 text-white-100"
              onClick={() => removeGoal(index)}
            >
              <X size={20} />
            </Button>
          </div>
        </React.Fragment>
      ))}
      <CustomButton
        buttonType="profileButton"
        type="button"
        // @ts-ignore
        onClick={() => appendGoal({ name: "", completed: false })}
      >
        Add Goal
      </CustomButton>
    </section>
  );
};

export default EditGoals;
