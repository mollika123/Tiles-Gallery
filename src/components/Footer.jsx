import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/tileshop_logo.svg"



export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 mt-10">
      <div className="w-11/12 mx-auto py-10 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
        <Image src={logo} width={200} height={200} alt="logo"></Image>
          <p className="mt-3 text-sm">
            Discover premium tiles for your dream spaces. Style meets durability.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-tiles">All Tiles</Link></li>
            <li><Link href="/my-profile">My Profile</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">📧 email@example.com</p>
          <p className="text-sm">📞 +1 234 567 890</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} TileGallery. All rights reserved.
      </div>
    </footer>
  );
}