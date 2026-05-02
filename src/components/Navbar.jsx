"use client"
import { useState } from "react"; // State lagbe menu open/close korar jonno
import Image from "next/image";
import logo from "../assets/tileshop_logo.svg"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react"; // Icons er jonno (npm i lucide-react)

const Navbar = () => {
  const { data: session, isLoading } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  const user = session?.user;
  if (isLoading) return null;

  return (
    <nav className="border-b border-gray-600 bg-white shadow-2xl sticky top-0 z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center p-4 lg:p-6">
        
        {/* Logo */}
        <div className="shrink-0">
          <Image src={logo} width={150} height={150} alt="logo" className="w-32 lg:w-48" />
        </div>

        {/* Desktop Menu - Hidden on Mobile */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-800 font-semibold">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/all-tiles">All Tiles</NavLink></li>
            {user && <li><NavLink href="/my-profile">My Profile</NavLink></li>}
          </ul>
        </div>

        {/* Action Buttons (Login/Logout) - Desktop */}
        <div className="hidden md:block">
          {user ? (
            <button
              onClick={() => authClient.signOut()}
              className="rounded-full border border-orange-600 text-orange-600 px-5 py-2 hover:bg-orange-600 hover:text-white transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-full border border-orange-600 bg-orange-600 text-white px-6 py-2 hover:bg-orange-700"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button - Visible only on Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar/Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg animate-in slide-in-from-top">
          <ul className="flex flex-col gap-4 text-gray-800 font-semibold">
            <li><NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink href="/all-tiles" onClick={() => setIsOpen(false)}>All Tiles</NavLink></li>
            {user && <li><NavLink href="/my-profile" onClick={() => setIsOpen(false)}>My Profile</NavLink></li>}
          </ul>
          
          <div className="pt-4 border-t border-gray-200">
            {user ? (
              <button
                onClick={() => authClient.signOut()}
                className="w-full text-center rounded-full border border-orange-600 py-2 text-orange-600"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center rounded-full bg-orange-600 py-2 text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;