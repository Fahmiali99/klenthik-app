import React from "react";
import element from "@/../public/assets/background/dots3.png";
import Image from "next/image";

export default function BgTupoksi() {
  return (
    <div className="w-full grid z-0">
      <div className=" relative top-9 z-0">
        <Image
          src={element}
          alt=""
          className="hidden lg:block absolute left-1/3 top-0 z-0"
        />
      </div>
    </div>
  );
}
