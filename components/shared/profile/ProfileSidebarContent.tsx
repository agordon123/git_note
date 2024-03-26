import React from "react";
import { socialLinks } from "@/lib/constants";
import { IconType } from "react-icons";
import { getSession } from "@/lib/authOptions";
import { IUser } from "@/database/models/user.model";
import { getOneUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import type { SocialLink } from "@/types/global";
interface ProfileSidebarContentProps {
  socialLinks: {
    label: string;
    route: string;
    icon: IconType;
  }[];
}
const ProfileSidebarContent = async ({
  socialLinks,
}: ProfileSidebarContentProps) => {
  let user: IUser | null = null;
  const session = await getSession();
  if (session) {
    user = await getOneUser(session.user?.email!);
  }
  const freshUser = user;
  return (
    <div className="right-sidebar-profile_wrapper">
      <div className="profile-sidebar-avatar_wrapper">
        <Image src={freshUser?.image!} alt="user avatar" />
      </div>
      <div>
        <SocialLinks l socialLinks={socialLinks} />
      </div>
    </div>
  );
};

export default ProfileSidebarContent;
