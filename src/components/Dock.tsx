"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import Link from "next/link";
import Gmail from "@/assets/Gmail";
import GitHub from "@/assets/Github";
import LinkedIn from "@/assets/Linkedin";

export type IconProps = React.HTMLAttributes<SVGElement>;

function DockDemo() {
  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon>
          <Link href="https://github.com/Kevin180317">
            <GitHub className="size-6" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="mailto:okhuysen.dev@gmail.com">
            <Gmail className="size-6" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="https://github.com/Kevin180317">
            <LinkedIn className="size-6" />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}

export default DockDemo;
