"use client";
import { sidebarLinks } from "@/constants";
import { getLoggedInUser } from "@/lib/Actions/user.actions";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// import logo from "../components/"
const SideBar = async () => {
  const pathName = usePathname();
  const isLOggedIn = await getLoggedInUser();
  // const isLOggedIn = {
  //   name: "Billy Tata Ngwa",
  //   email: "billytatangwa5@gmail.com",
  //   imageUrl: "ypui",
  // };
  return (
    <section className="sidebar shadow-2xl">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-3">
          {/* <Logo /> */}
        </Link>
        {sidebarLinks.map((link) => {
          const isActive =
            pathName === link.route || pathName.startsWith(`${link.route}/`);
          return (
            <Link
              key={link.label}
              href={link.route}
              className={cn("sidebar-links rounded p-3", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={20}
                  height={20}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
                <p className={cn("sidebar-label", { "!text-white": isActive })}>
                  {link.label}
                </p>
              </div>
            </Link>
          );
        })}
      </nav>
      <div className="flex">
        {/* <p className="rounded shadow-2xl">{isLOggedIn?.name[0]}</p>  */}
        <p className="flex-col">
          <span className="font-semiBold textxl">
          {isLOggedIn?.name}
          </span>
          <span className="font-semiBold textxl">
          {isLOggedIn?.email}
          </span>  
        </p>
        <button>
          <LogOut />
        </button>
      </div>
      {/* <h1 className="text-bankGradient">{isLOggedIn?.name}</h1> */}
    </section>
  );
};

export default SideBar;
