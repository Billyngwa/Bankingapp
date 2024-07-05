"use client"
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image src={"/icons/logo.svg"} alt="Flash" width={34} height={34} />
          <h1 className="sidebar-logo">Flash</h1>
        </Link>
        {sidebarLinks.map((link) => {
          const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`)
          return (
            <Link key={link.label} href={link.route}
            className={cn("sidebar-links rounded p-3", {"bg-bank-gradient":isActive})}
            >
             <div className="flex items-center gap-3">
              <Image src={link.imgURL} 
              alt={link.label}
              width={20}
              height={20}
              className={cn({'brightness-[3] invert-0':isActive})}
              />
              <p className={cn("sidebar-label", {"!text-white":isActive})}>
                {link.label}
              </p>
             </div>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default SideBar;
