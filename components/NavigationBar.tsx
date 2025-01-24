"use client";

import Link from "next/link";
import Image from "next/image";
import { AppContentConstants } from "@/constants/AppContentConstants";
import { GoArrowUpRight } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ButtonConstants } from "@/constants/ButtonConstants";

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const NavigationItems = () => {
    const pathname = usePathname();

    const containerClassName = cn(
      "z-10",
      showMenu ? "max-sm:flex max-sm:flex-col " : "hidden",
      "max-sm:p-3 max-sm:absolute max-sm:bg-[#F2EFE7] max-sm:top-10 max-sm:right-0 max-sm:w-40 max-sm:shadow-lg max-sm:gap-1",
      "sm:flex sm:flex-row sm:gap-5"
    );

    return (
      <div className={containerClassName}>
        <Link href={"/projects"}>
          <span
            className={cn(
              "transition-all font-normal hover:font-extrabold hover:tracking-widest",
              pathname === "/projects" && "font-extrabold tracking-widest"
            )}
          >
            {ButtonConstants.projects}
          </span>
        </Link>
        <Link href={"/works"}>
          <span
            className={cn(
              "transition-all font-normal hover:font-extrabold hover:tracking-widest",
              pathname === "/works" && "font-extrabold tracking-widest"
            )}
          >
            {ButtonConstants.works}
          </span>
        </Link>
        <Link
          href={AppContentConstants.resumeLink}
          className="flex flex-row items-center"
        >
          <span
            className={cn(
              "transition-all font-normal hover:font-extrabold hover:tracking-widest"
            )}
          >
            {ButtonConstants.resume}
          </span>
          <GoArrowUpRight size={20} />
        </Link>
        <Link
          href={AppContentConstants.linkedLink}
          className="flex flex-row items-center"
        >
          <span className="transition-all font-normal hover:font-extrabold hover:tracking-widest">
            {ButtonConstants.linkedIn}
          </span>
          <GoArrowUpRight size={20} />
        </Link>
      </div>
    );
  };

  return (
    <nav className="flex flex-col-reverse py-6 max-xl:px-6 border-b-2 border-b-[#2C363F]">
      <div className="flex flex-row items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/images/icon_black.png"}
            alt="dc logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="relative flex flex-col-reverse">
          <NavigationItems />
          <IoMenu className="sm:hidden" onClick={onMenuClick} size={30} />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
