import React from "react";
import EditExperience from "../profile/edit/EditExperience";

interface OnboardingThreeProps {
  experiences: any;
  appendExperience: any;
  removeExperience: any;
  register: any;
  errors: any;
  step: string;
}
const OnboardingThree = ({
  experiences,
  register,
  removeExperience,
  errors,
  appendExperience,
}: OnboardingThreeProps) => {
  return (
    <EditExperience
      experienceFields={experiences}
      register={register}
      removeExperience={removeExperience}
      appendExperience={appendExperience}
    />
  );
};

export default OnboardingThree;
