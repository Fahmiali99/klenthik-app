import { content } from "@/utils/home";
import Image from "next/image";
import React from "react";

function Content() {
  return (
    <div className=" bg-primary-blue-200 relative">
      <div className="w-screen max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className=" h-full sm:block md:block lg:grid items-center py-14 md:py-20 lg:py-28  ">
          <div className=" relative">
            <div>
              <div className="flex justify-center text-center">
                <div>
                  <p className=" text-primary-succes md:text-lg lg:text-xl">
                    Why Choose Us
                  </p>
                  <h1 className=" text-2xl md:text-3xl lg:text-4xl py-4 font-semibold text-primary-dark">
                    Manfaat Klenthik ini
                  </h1>
                  <p className=" text-secondary">
                    Disini tempat pengelolaan limbah minyak jelantah bekas pakai
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
                {content.map((item, idx) => (
                  <div
                    key={idx}
                    className=" border border-gray-100 py-20 px-6 rounded-3xl bg-white"
                  >
                    <Image src={item.images} alt="" />
                    <h1 className="text-xl md:text-xl lg:text-2xl py-5 font-semibold text-primary-dark">
                      {item.title}
                    </h1>
                    <p className=" text-secondary">{item.children}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
