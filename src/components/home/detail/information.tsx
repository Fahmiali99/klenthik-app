import React from "react";
import information from "@/../public/assets/home/info-img.png";
import Image from "next/image";

function Information() {
  return (
    <div className="container mx-auto">
      <div className=" h-full sm:block md:block lg:grid items-center py-14 md:py-20 lg:py-36  px-4 sm:px-4 md:px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-dark w-full lg:w-4/5">
              Yuk, ikutin info kegiatan dari kami!
            </h1>
            <p className="py-4 text-secondary text-base ">
              Kembangkan bisnismu disini !
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
            <Image src={information} className=" w-4/5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
