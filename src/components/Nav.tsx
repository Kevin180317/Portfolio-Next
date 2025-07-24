"use client";

import Logo from "@/assets/Logo";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `hover:text-orange-500 hover:underline transition-transform duration-300 ${
      pathname === href ? "text-orange-500" : "text-white"
    }`;

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <Logo className="w-16 h-16 text-black bg-white rounded-xl" />
        <h1 className="uppercase text-white">Okhuysen Dev</h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className={linkClasses("/projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={linkClasses("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
