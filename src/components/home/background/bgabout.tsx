import React from "react";
import doublecircle from "@/../public/assets/background/doublecircle.svg";
import Image from "next/image";

export default function BgAbout() {
  return (
    <div className="w-full grid z-0">
      <div className=" relative top-9 z-0">
        <Image
          src={doublecircle}
          alt=""
          className="hidden lg:block absolute right-0 top-10 z-0"
        />
      </div>
    </div>
  );
}
