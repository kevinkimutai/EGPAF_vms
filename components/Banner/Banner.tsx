import React from "react";

import ImageSrc from "../../public/images/landcruiser-hero.png";
import Logo from "../../public/images/logo-egpaf-removebg-preview.png";
import Image from "next/image";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-emerald-100 rounded-2xl w-1/2 mb-8">
      <Image
        src={Logo}
        height={200}
        width={200}
        alt={"vehicle"}
        className="w-[5rem] object-contain"
      />
      <div className="flex flex-col justify-end">
        <p className="mb-4 font-semibold">
          Welcome To EGPAF Vehicle Management System.
        </p>
        <Button className="w-fit ml-auto">Start New Trip</Button>
      </div>
    </div>
  );
};

export default Banner;
