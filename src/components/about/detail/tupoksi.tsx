import React from "react";
import hero from "@/../public/assets/about/fungsitujuan.svg";
import Image from "next/image";
import Up from "@/common/up";

function Tupoksi() {
  return (
    <div className=" container mx-auto h-full sm:block md:block lg:grid items-center py-0 md:py-20 lg:py-20 px-4  lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1 pt-7 lg:pt-0">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-dark">
            Fungsi & Tujuan
          </h1>
          <p className="py-4 text-secondary text-base ">
            Klenthik berupa multiplatform yang menghubungkan antara supplier
            limbah minyak jelantah dengan buyer hasil olahan minyak jelantah.
            Sehingga supplier dan buyer dengan mudah bertemu dalam satu
            genggaman. Tujuan dari Klenthik adalah meningkatkan kapabilitas
            produksi energi terbarukan yang menghasilkan bahan bakar alternatif.
          </p>
          <button
            onClick={() => window.open("/about")}
            type="button"
            className="text-white bg-primary-blue hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
          >
            Selengkapnya
          </button>
        </div>

        <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end pt-10 lg:pt-0">
          <Image src={hero} className=" w-4/4" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Tupoksi;
