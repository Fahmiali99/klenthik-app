import React from "react";
import hero from "@/../public/assets/home/about-img.png";
import Image from "next/image";

function Aboutme() {
  return (
    <div className=" relative bg-white ">
      <div className="w-screen flex max-w-7xl mx-auto px-4 sm:px-6 relative  ">
        <div className=" h-full  py-14 md:py-20 lg:py-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center  ">
            <div className="lg:order-2">
              <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-dark">
                Tentang Kami
              </h1>
              <p className="py-4 text-secondary text-base ">
                Klenthik memberikan solusi atas masalah tersebut dengan
                menciptakan bridge antara pengelola limbah minyak jelantah
                dengan penyalur limbah melalui sistem pengelolaan limbah minyak
                jelantah secara terpadu yang tidak membahayakan lingkungan
              </p>
              <button
                onClick={() => window.open("/about")}
                type="button"
                className="text-white bg-primary-blue hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
              >
                Selengkapnya
              </button>
            </div>

            <div className=" pb-16 md:pb-20 lg:pb-0 lg:order-1 lg:block flex items-center justify-center h-full pt-10 lg:pt-0">
              <Image src={hero} className=" w-3/4" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
