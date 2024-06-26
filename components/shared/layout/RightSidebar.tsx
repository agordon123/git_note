import React from "react";
import SidebarContent from "../profile/SidebarContent";
import { IUser } from "@/database/models/user.model";
import { getSession } from "@/lib/authOptions";
import { getOneUser } from "@/lib/actions/user.actions";

const RightSidebar = async () => {
  const session = await getSession();
  let user;

  if (session) {
    user = await getOneUser(session?.user?.email!);
  }
  const cleanUser: IUser = JSON.parse(JSON.stringify(user));

  return (
    <section className=" border-l-[1.5px] bg-black-800 text-white-100 max-lg:hidden">
      <SidebarContent user={cleanUser} />
    </section>
  );
};

export default RightSidebar;
