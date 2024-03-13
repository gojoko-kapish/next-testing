import React from "react";
import { MainNavigationMenu } from "./main-menu";
import { ThemeToggle } from "@/components/common/Theme/theme";
import { assets } from "@/assets";
import Image from "next/image";

const Headers = () => {
  return (
    <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
      <Image
        className="w-10 rounded-full md:block hidden"
        src={assets.header}
        alt={"alt"}
        width={16}
        height={16}
      />
      <MainNavigationMenu />
      <ThemeToggle />
    </div>
    </div>
  );
};

export default Headers;
