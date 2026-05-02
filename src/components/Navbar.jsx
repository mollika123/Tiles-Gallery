"use client"
import Image from "next/image";
import logo from "../assets/tileshop_logo.svg"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import NavLink from "./NavLink";

const Navbar = () => {
  const { data: session, isLoading } = authClient.useSession();

  const user = session?.user;
  if (isLoading) return null; 
  console.log(user);
  return (
    <div className="border-b border-gray-600 p-6 bg-white shadow-2xl">
     <div className="flex flex-col md:flex-row md:justify-between md:items-center w-11/12 mx-auto gap-4">
        
        <div><Image src={logo} width={200} height={200} alt="logo"></Image></div>
      
      
        <div>
          <ul className="flex items-center justify-center gap-4 text-gray-800 font-semibold">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/all-tiles">All Tiles</NavLink></li>
            {session?.user&& <li><NavLink href="/my-profile">My Profile</NavLink></li>}
      
          </ul>
      </div>
      <div>
          {user ? (
            <button
              onClick={() => authClient.signOut()}
              className="rounded-full border px-5 py-2.5"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-full border px-5 py-2.5"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      </div>
  );
};

export default Navbar;