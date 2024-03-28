"use client";
import React from "react";
import EditGoals from "../profile/edit/EditGoals";

const OnboardingTwo = ({
  register,
  goalFields,
  appendGoal,
  removeGoal,
  step,
  className,
}: {
  register: any;
  goalFields: any;
  appendGoal: any;
  removeGoal: any;
  step: string;
  className?: string;
}) => {
  return (
    <EditGoals
      register={register}
      removeGoal={removeGoal}
      goalFields={goalFields}
      appendGoal={appendGoal}
    />
  );
};

export default OnboardingTwo;
