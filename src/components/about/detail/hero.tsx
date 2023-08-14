import React from "react";
import hero from "@/../public/assets/home/hero-img.png";
import Image from "next/image";
import Up from "@/common/up";

function Hero() {
  return (
    <div className="container mx-auto">
      <div className="pt-36 md:pt-36 lg:pt-24  h-full flex justify-center text-center items-center py-14 md:py-20 lg:py-40 lg:min-h-[calc(100vh-3rem)] px-4">
        <div>
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-dark">
            We’re on
          </h1>
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-dark">
            a Mission
          </h1>
          <p className="py-4 pt-6 text-secondary text-base ">
            Mengefisiensi proses distribusi dan akomodasi limbah minyak
            jelantah.
          </p>
          <button
            onClick={() => window.open("/about")}
            type="button"
            className="text-white bg-primary-blue hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
          >
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
