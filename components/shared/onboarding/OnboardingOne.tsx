import React from "react";
import EditBasicInfo from "../profile/edit/EditBasicInfo";

import { IUser } from "@/database/models/user.model";

interface OnboardingOneProps {
  user?: Partial<IUser>;
  step: string;
  register: any;
  errors: any;
}
const OnboardingOne = ({ register, errors }: OnboardingOneProps) => {
  return (
    <>
      <EditBasicInfo register={register} errors={errors} />
    </>
  );
};

export default OnboardingOne;
