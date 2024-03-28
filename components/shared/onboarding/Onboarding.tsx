"use client";

import React, { useTransition } from "react";
import OnboardingOne from "./OnboardingOne";
import { IUser } from "@/database/models/user.model";
import OnboardingTwo from "./OnboardingTwo";
import { useFieldArray, useForm } from "react-hook-form";
import { CompleteProfileEditSchema } from "@/lib/profileValidations";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import OnboardingThree from "./OnboardingThree";
import { updateUser } from "@/lib/actions/user.actions";
import OnboardingFour from "./OnboardingFour";
import CustomButton from "../CustomButton";
import { Progress } from "@/components/ui/progress";
import OnboardingTick from "./OnboardingTick";
import UploadPhoto from "../profile/edit/UploadPhoto";
import { useRouter } from "next/navigation";

interface OnboardingProps {
  children?: React.ReactNode;
  step: string;
  user: Partial<IUser>;
}

const Onboarding = ({ step, user }: OnboardingProps) => {
  const [currentStep, setCurrentStep] = React.useState(step);
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const {
    handleSubmit,
    control,
    register,
    getValues,
    formState: { errors },
  } = useForm<z.infer<typeof CompleteProfileEditSchema>>({
    resolver: zodResolver(CompleteProfileEditSchema),
    defaultValues: {
      learningGoals: user.learningGoals || [],
      experiences: user.experiences?.map((exp) => ({ name: exp })) || [],
      availability: {
        startTime: user?.startTime || new Date(),
        endTime: user?.endTime || new Date(),
      },
      newProjects: user?.newProjects || false,
      technologies: user?.technologies || [],
      portfolio: user?.portfolio || "",
      email: user?.email || "",
    },
  });
  const {
    fields: goalFields,
    append: appendGoal,
    remove: removeGoal,
  } = useFieldArray<z.infer<typeof CompleteProfileEditSchema>>({
    control,
    name: "learningGoals",
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray<z.infer<typeof CompleteProfileEditSchema>>({
    control,
    name: "experiences",
  });
  const changeStep = async () => {
    const nextStep = parseInt(currentStep) + 1;
    const { fullname, portfolio, learningGoals, email, experiences } =
      getValues();
    try {
      if (currentStep === "1") {
        await updateUser({
          updateData: {
            fullname,
            portfolio,
            email,
          },
        });
      }
      if (currentStep === "2") {
        await updateUser({
          updateData: {
            learningGoals,
          },
        });
      }
      if (currentStep === "3") {
        await updateUser({
          updateData: {
            experiences: experiences?.map((experience) => experience.name),
          },
        });
      }
    } catch (error) {
      console.log(error);
    }

    setCurrentStep(nextStep.toString());
  };

  const onSubmit = async () => {
    try {
      const { availability, newProjects } = getValues();
      const startTime = availability?.startTime;
      const endTime = availability?.endTime;
      startTransition(async () => {
        await updateUser({
          updateData: {
            newProjects,
            startTime,
            endTime,
          },
        });
        router.push("/");
      });
    } catch (e) {
      console.log(e);
    }
  };

  const stepMap: {
    [key: string]: {
      component: React.ReactNode;
      fields: string[];
    };
  } = {
    1: {
      fields: ["fullname", "portfolio", "email"],
      component: (
        <OnboardingOne
          user={user}
          step={step}
          register={register}
          errors={errors}
        />
      ),
    },
    2: {
      fields: ["learningGoals"],
      component: (
        <OnboardingTwo
          step={step}
          goalFields={goalFields}
          register={register}
          appendGoal={appendGoal}
          removeGoal={removeGoal}
        />
      ),
    },
    3: {
      fields: ["experiences"],
      component: (
        <OnboardingThree
          register={register}
          step={step}
          experiences={experienceFields}
          errors={errors}
          appendExperience={appendExperience}
          removeExperience={removeExperience}
        />
      ),
    },
    4: {
      fields: ["newProjects", "availability"],
      component: (
        <OnboardingFour
          register={register}
          control={control}
          errors={errors}
          step={step}
        />
      ),
    },
  };

  return (
    <>
      <section className="relative w-full">
        <div className="absolute top-[50%] h-1 w-full bg-gray-400/30"></div>
        <Progress
          className="absolute top-[25%]"
          value={(Number(currentStep) - 1) * 33}
          max={4}
        />

        <OnboardingTick step={parseInt(currentStep)} />
      </section>
      {currentStep === "1" && (
        <div className="box-border justify-between border-white-500 p-4">
          {" "}
          <UploadPhoto image={user.image} />
        </div>
      )}
      <form
        className="flex-0 w-full overflow-y-hidden"
        onSubmit={handleSubmit(onSubmit)}
      >
        {stepMap[currentStep].component}

        {currentStep !== "4" ? (
          <CustomButton
            className="pb-4"
            type="button"
            buttonType="primary"
            type="button"
            onClick={changeStep}
          >
            Next
          </CustomButton>
        ) : (
          <CustomButton disabled={pending} buttonType="primary" type="submit">
            {" "}
            Finish
          </CustomButton>
        )}
      </form>
    </>
  );
};

export default Onboarding;
