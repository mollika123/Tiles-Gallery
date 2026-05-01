
import Image from "next/image";
import logo from "../assets/tileshop_logo.svg"
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b border-gray-600 p-6 bg-white shadow-2xl">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        
        <div><Image src={logo} width={200} height={200} alt="logo"></Image></div>
      
      
        <div>
          <ul className="flex items-center justify-center gap-4 text-gray-800 font-semibold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-tiles">All Tiles</Link></li>
            <li><Link href="/">My Profile</Link></li>
      
          </ul>
      </div>
      <div className="flex gap-2 items-center">
        <button className="rounded-full shadow-2xl border border-gray-500 px-5 py-2.5"><Link href={'/login'}>Login</Link></button>
        <button className="rounded-full shadow-2xl border border-gray-500 px-5 py-2.5"><Link href={'/login'}>Logout</Link></button>
      </div>
      </div>
      </div>
  );
};

export default Navbar;