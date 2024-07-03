import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="MB-12 cursor-pointer items-center gap-2">
          <Image src={"/icons/logo.svg"} alt="Flash" width={34} height={34} />
          <h1 className="sidebar-logo">Flash</h1>
        </Link>
        {sidebarLinks.map((link) => {
          return (
            <Link key={link.label} href={link.route}
            className="text-blue-400"
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default SideBar;
