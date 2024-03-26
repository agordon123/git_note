"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useEffect, useState } from "react";

const LearningGoal = ({
  name,
  completed,
}: {
  name: string;
  completed: boolean;
}) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);

  // Effect hook to update local state when the `completed` prop changes.
  useEffect(() => {
    setIsCompleted(completed);
  }, [completed]);

  const handleCheckboxChange = async () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <div className="inline-flex w-full flex-row">
      <Checkbox
        checked={isCompleted}
        className="gap-x-1 bg-green-400 text-black-900"
        onChange={handleCheckboxChange}
      />
      <span className="paragraph-3-regular align-top text-white-100">
        {name}
      </span>
    </div>
  );
};

export default LearningGoal;
