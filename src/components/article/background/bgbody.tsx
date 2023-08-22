import Image from "next/image";
import React from "react";
import bg1 from "@/../public/assets/background/circle.svg";

export default function BgBody() {
  return (
    <div>
      <div className="justify-start hidden md:block lg:block">
        <Image src={bg1} width={200} alt="" className="absolute top-40" />
      </div>

      <div className=" hidden md:block lg:block">
        <Image
          src={bg1}
          width={200}
          alt=""
          className="absolute -bottom-2/4 right-0 rotate-180 "
        />
      </div>
    </div>
  );
}
