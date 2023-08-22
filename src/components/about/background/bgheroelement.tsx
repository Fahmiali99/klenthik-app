import React from "react";
import element from "@/../public/assets/background/element.svg";
import Image from "next/image";

export default function BgHeroElement() {
  return (
    <div className="w-full ">
      <div className=" relative top-9 z-0">
        <Image
          src={element}
          alt=""
          className="hidden lg:block absolute left-0 -top-20 z-0"
        />
      </div>
    </div>
  );
}
