import React from "react";
import hero from "@/../public/assets/home/hero-img.png";
import Image from "next/image";
import Up from "@/common/up";

function Hero() {
  return (
    <div className="w-screen max-w-7xl mx-auto px-4 sm:px-6 relative lg:min-h-screen">
      <Up />
      <div className=" h-full sm:block md:block lg:grid items-center py-14 md:py-20 lg:py-40  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-dark">
              Klenthik
            </h1>
            <p className="py-4 text-secondary text-base ">
              Klenthik merupakan startup-startup yang juga bergerak di bidang
              pengelolaan limbah minyak jelantah. Startup yang menjadi direct
              competitor Klenthik.
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
