import React from "react";
import aboutme from "@/../public/assets/about/tentangkami.svg";
import Image from "next/image";

function Aboutme() {
  return (
    <div className=" container mx-auto h-full sm:block md:block lg:grid items-center py-0 md:py-20 lg:py-20 px-4  lg:px-0 relative z-10">
      <div className="py-14 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-2 pt-7 lg:pt-0 lg:pl-10">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-dark">
            Tentang Kami
          </h1>
          <p className="py-4 text-secondary text-base ">
            Klenthik memberikan solusi atas masalah tersebut dengan menciptakan
            bridge antara pengelola limbah minyak jelantah dengan penyalur
            limbah melalui sistem pengelolaan limbah minyak jelantah secara
            terpadu yang tidak membahayakan lingkungan
          </p>
          <button
            onClick={() => window.open("/about")}
            type="button"
            className="text-white bg-primary-blue hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
          >
            Selengkapnya
          </button>
        </div>

        <div className=" flex items-center justify-center sm:justify-center md:justify-center  lg:justify-start pt-10 sm:pt-10 md:pt-10 lg:pt-0 order-1">
          <Image src={aboutme} className=" w-4/4" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
