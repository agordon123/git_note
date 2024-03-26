import EditProfile from "@/components/shared/profile/edit/EditProfile";

import { getOneUser } from "@/lib/actions/user.actions";
import { getSession } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import React from "react";

const EditProfilePage = async () => {
  const session = await getSession();
  let user;
  if (session) {
    user = await getOneUser(session?.user?.email!);
    console.log(user);
  } else {
    redirect("/sign-in");
  }
  const cleanUser = JSON.parse(JSON.stringify(user));
  return (
    <div className="box-border flex min-h-[screen] w-full flex-col justify-start px-[30px] align-top   ">
      <span className="display-1-bold pl-[30px] pt-[30px] text-white-100">
        Edit Profile
      </span>

      <EditProfile user={cleanUser} _id={JSON.stringify(user?.id)} />
    </div>
  );
};

export default EditProfilePage;
