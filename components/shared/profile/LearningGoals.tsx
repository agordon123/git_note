import React from "react";
import LearningGoal from "./LearningGoal";
import { IUser } from "@/database/models/user.model";
interface LearningGoalsProps {
  user: Partial<IUser>;
  learningGoals?: {
    name: string;
    completed: boolean;
  }[];
}

export const LearningGoals = async ({
  user,
  learningGoals,
}: LearningGoalsProps) => {
  return (
    <div className="w-full px-[30px]">
      {learningGoals?.map((goal, idx) => {
        return (
          <LearningGoal
            key={goal.name}
            name={goal.name}
            completed={goal.completed}
          />
        );
      })}
    </div>
  );
};

export default LearningGoals;
