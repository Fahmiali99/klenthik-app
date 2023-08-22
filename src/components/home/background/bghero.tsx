import React from "react";
import Image from "next/image";
import bg1 from "@/../public/assets/background/bg1.svg";
import bg2 from "@/../public/assets/background/dots3.png";
import bg3 from "@/../public/assets/background/element.svg";
export default function BgHero() {
  return (
    <div className="relative">
      <div className="justify-start hidden md:block lg:block">
        <Image src={bg3} width={80} alt="" className="absolute top-40" />
      </div>
      <div className="flex justify-end">
        <Image src={bg1} alt="" className="hidden  lg:block absolute" />
      </div>

      <div className="flex justify-end relative bottom-0 right-1/3 top-96 ">
        <Image
          src={bg2}
          width={150}
          alt=""
          className="absolute top-96 hidden md:block lg:block"
        />
      </div>
    </div>
  );
}
