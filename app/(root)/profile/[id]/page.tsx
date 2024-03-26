import ProfileHeader from "@/components/shared/profile/ProfileHeader";
import TechStacks from "@/components/shared/profile/TechStacks";
import { getOneUser } from "@/lib/actions/user.actions"; // Removed unused import
import { getSession } from "@/lib/authOptions";
import ExperienceLevels from "@/components/shared/profile/ExperienceLevels";
import React from "react";
import LearningGoals from "@/components/shared/profile/LearningGoals";
import { IUser } from "@/database/models/user.model";

const ProfilePage = async () => {
  const session = await getSession();
  let user;

  if (session) {
    user = await getOneUser(session?.user?.email!);
  }
  const cleanUser: IUser = JSON.parse(JSON.stringify(user));
  return (
    <div className="box-border flex min-h-[screen] w-full flex-col ">
      {user && <ProfileHeader />}
      {user && (
        <LearningGoals user={user} learningGoals={cleanUser.learningGoals} />
      )}
      {user && (
        <ExperienceLevels
          user={user}
          experienceLevels={user.experiences ?? []}
        />
      )}
      {user && (
        <TechStacks user={user} technologies={user.technologies ?? []} />
      )}
    </div>
  );
};

export default ProfilePage;
