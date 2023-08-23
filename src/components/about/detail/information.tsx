import React from "react";
import gabung from "@/../public/assets/about/gabung.svg";
import Image from "next/image";

function Joinme() {
  return (
    <div className="flex justify-center py-14 lg:py-28 ">
      <div className="w-screen  max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-dark w-full lg:w-4/5">
              Yuk, Gabung bersama kami !
            </h1>
            <p className="py-4 text-secondary text-base ">
              Kembangkan bisnismu disini !
            </p>
            <button
              onClick={() => window.open("/about")}
              type="button"
              className="text-white bg-primary-blue hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
            >
              Gabung
            </button>
          </div>

          <div className=" flex items-center justify-center lg:justify-end pt-10 lg:pt-0">
            <Image src={gabung} className=" w-4/5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Joinme;
