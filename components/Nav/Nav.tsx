import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

import LogoSrc from "../../public/images/egpaf_logo-2.png";

const Nav = () => {
  return (
    <nav className="px-4 sm:px-8 py-2 flex justify-between items-center shadow-md fixed w-full bg-white z-20">
      <div className="flex justify-center items-center">
        {/* LOGO */}
        <Image
          src={LogoSrc}
          height={200}
          width={200}
          alt="logo"
          className="w-[10rem] object-contain"
        />

        <p className="font-semibold ml-8 text-xl hidden sm:block  ">
          Vehicle Management System
        </p>
      </div>
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
};

export default Nav;
