import React from "react";
import EditAvailability from "../profile/edit/EditAvailability";
interface OnboardingFourProps {
  register: any;
  errors?: any;
  selectedFrom: Date;
  selectedTo: Date;
  handleDaySelectFrom: (date: Date) => void;
  handleDaySelectTo: (date: Date) => void;
  control: any;
  step: string;
}
const OnboardingFour = ({
  selectedFrom,
  selectedTo,
  handleDaySelectFrom,
  handleDaySelectTo,
  register,
  errors,
  control,
  step,
}: OnboardingFourProps) => {
  return (
    <EditAvailability
      register={register}
      handleDaySelectFrom={handleDaySelectFrom}
      handleDaySelectTo={handleDaySelectTo}
      selectedFrom={selectedFrom}
      selectedTo={selectedTo}
      control={control}
    />
  );
};

export default OnboardingFour;
