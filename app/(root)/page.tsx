import SignOutButton from "@/components/auth/SignOutButon";

import { getOneUser } from "@/lib/actions/user.actions";
import { getSession } from "@/lib/authOptions";

import Link from "next/link";

export default async function Home() {
  const session = await getSession();
  let mongoUser;

  if (session) {
    console.log(session);
    mongoUser = await getOneUser(session.user?.email ?? "");
  }

  return (
    <main className="flex-center flex w-full text-white-300">
      <SignOutButton />

      <Link href={`/profile/${mongoUser?.id!}`}>
        <button className="heading-2-bold  bg-primary size-[200px]">
          Profile
        </button>
      </Link>
    </main>
  );
}
