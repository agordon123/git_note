import React from "react";
import Image from "next/image";
import completedTick from "@/public/icons/completedtick.svg";

import incompleteTick from "@/public/icons/incompletetick.svg";
import iconStep from "@/public/icons/icon-step.svg";

interface OnboardingTickProps {
  step: number;
  className?: string;
}

const OnboardingTick = ({ step, className }: OnboardingTickProps) => {
  return (
    <div className="relative h-8 w-full align-middle ">
      <div className="absolute left-0 top-0 flex w-full justify-between">
        <Image
          className={`z-20 rounded-[4px] bg-primary-500 text-primary-500 accent-white-300`}
          src={
            step === 1 ? iconStep : step > 1 ? completedTick : incompleteTick
          }
          alt="tick"
          width={32}
          height={32}
        />
        <Image
          className={`z-20 rounded-[4px] bg-primary-500 text-primary-500 accent-white-300`}
          src={
            step === 2 ? iconStep : step > 2 ? completedTick : incompleteTick
          }
          alt="tick"
          width={32}
          height={32}
        />
        <Image
          className={`z-20 rounded-[4px] bg-primary-500 text-primary-500 accent-white-300`}
          src={
            step === 3 ? iconStep : step > 3 ? completedTick : incompleteTick
          }
          alt="tick"
          width={32}
          height={32}
        />
        <Image
          className={`z-20 rounded-[4px] bg-primary-500 text-primary-500 accent-white-300`}
          src={
            step === 4 ? iconStep : step > 4 ? completedTick : incompleteTick
          }
          alt="tick"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default OnboardingTick;
