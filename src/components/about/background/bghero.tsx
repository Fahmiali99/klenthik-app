import React from "react";
import Image from "next/image";
import bg1 from "@/../public/assets/background/circle.png";

export default function BgHero() {
  return (
    <div className=" ">
      <div className=" flex justify-center lg:justify-end ">
        <Image
          src={bg1}
          alt=""
          className=" w-3/5 sm:w-1/3 md:w-1/3 lg:w-1/3 absolute rotate-180 top-28 lg:top-28 z-0"
        />
      </div>
      <div className="flex justify-center lg:justify-start ">
        <Image
          src={bg1}
          alt=""
          className="w-3/5 sm:w-1/3 md:w-1/3 lg:w-1/3 absolute top-64 lg:top-80 rotate-45 z-0 "
        />
      </div>
    </div>
  );
}
