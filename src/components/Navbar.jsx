"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/tileshop_logo.svg";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react"; // Iconer jonno 'npm install lucide-react' korun

const Navbar = () => {
  const { data: session, isLoading } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  const user = session?.user;

  if (isLoading) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src={logo} width={160} height={40} alt="logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/all-tiles">All Tiles</NavLink>
          {user && <NavLink href="/my-profile">My Profile</NavLink>}
        </div>

        {/* Auth Button (Desktop) */}
        <div className="hidden md:flex md:flex-1 md:justify-end">
          {user ? (
            <button
              onClick={() => authClient.signOut()}
              className="rounded-full bg-red-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
          <div className="flex flex-col gap-4 text-center font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/all-tiles" onClick={() => setIsOpen(false)}>All Tiles</Link>
            {user && <Link href="/my-profile" onClick={() => setIsOpen(false)}>My Profile</Link>}
            
            <hr className="border-gray-100" />
            
            {user ? (
              <button
                onClick={() => { authClient.signOut(); setIsOpen(false); }}
                className="w-full rounded-lg bg-red-50 py-2 text-red-600 font-bold"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-lg bg-indigo-600 py-2 text-white font-bold text-center"
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