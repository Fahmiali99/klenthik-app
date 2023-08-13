import React from "react";
Image;
import hero from "@/../public/assets/home/hero-img.png";
import Image from "next/image";
import Up from "@/common/up";

function Hero() {
  return (
    <div className="container mx-auto">
      <Up />
      <div className=" h-full sm:block md:block lg:grid items-center py-14 md:py-20 lg:py-40 lg:min-h-[calc(100vh-3rem)] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <h1 className=" text-4xl font-semibold text-primary-dark">
              Klenthik
            </h1>
            <p className="py-4 text-secondary text-base ">
              Botnet adalah organisasi yang lahir dari kebutuhan mahasiswa untuk
              mengembangkan diri dibidang teknologi.
            </p>
            <button
              onClick={() => window.open("/about")}
              type="button"
              className="text-white bg-primary-blue hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
            >
              Selengkapnya
            </button>
          </div>

          <div className=" flex items-center justify-center lg:justify-end pt-10 lg:pt-0">
            <Image src={hero} className=" w-3/4" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
