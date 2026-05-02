"use client";

import { authClient } from "@/lib/auth-client";
import { Circles } from "react-loader-spinner";
import Image from "next/image";
import avatar from "../../assets/user.png";
import Link from "next/link";

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) return <Circles />;
  if (!user) return <p>Not logged in</p>;

  return (
    <div className="max-w-md mx-auto p-9 shadow-xl py-8 my-8 text-center">
      
      <Image
        src={user?.image || avatar}
        alt="profile"
        width={200}
        height={200}
        className="rounded-full mx-auto"
      />

      <h2 className="text-xl font-bold mt-4">{user.name}</h2>
      <p className="text-gray-500">{user.email}</p>


      <Link href="/my-profile/update">
        <button className="mt-5 bg-orange-600 text-white px-4 py-2 rounded w-full">
          Update Information
        </button>
      </Link>
    </div>
  );
};

export default MyProfile;