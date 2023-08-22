import React from "react";
import element from "@/../public/assets/background/dots3.png";
import Image from "next/image";

export default function BgAbout() {
  return (
    <div className="w-full grid z-0">
      <div className=" relative top-9 z-0">
        <Image
          src={element}
          alt=""
          className="hidden lg:block absolute right-20 top-10 z-0"
        />
      </div>
    </div>
  );
}
