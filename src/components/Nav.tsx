import Logo from "@/assets/Logo";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <Logo className="w-16 h-16 text-black bg-white rounded-xl" />
        <h1 className="uppercase">Okhuysen Dev</h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-white hover:text-orange-500 hover:underline transition-transform duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-white hover:text-orange-500 hover:underline transition-transform duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white hover:text-orange-500 hover:underline transition-transform duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
