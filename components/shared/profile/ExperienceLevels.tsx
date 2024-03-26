import { IUser } from "@/database/models/user.model";
import React from "react";
import userCheck from "@/public/icons/usercheck.svg";
import Image from "next/image";
interface ExperienceLevelsProps {
  user?: IUser;
  experienceLevels: string[];
  [key: string]: any;
}
const ExperienceLevels = ({
  user,
  experienceLevels,
}: ExperienceLevelsProps) => {
  return (
    <div>
      {experienceLevels.map((experience) => {
        return (
          <>
            <div
              key={experience}
              className="w-full bg-black-700 px-[30px] text-white-100"
            >
              <Image src={userCheck} alt="userCheck" />
              <span>{experience}</span>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ExperienceLevels;
