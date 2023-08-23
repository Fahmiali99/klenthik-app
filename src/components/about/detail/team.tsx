import { team } from "@/utils/about";
import { content } from "@/utils/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Team() {
  return (
    <div className="flex justify-center py-14 md:py-20 lg:py-28">
      <div className="w-screen  max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="">
          <div className="flex justify-center text-center">
            <div>
              <h1 className=" text-2xl md:text-3xl lg:text-4xl py-4 font-semibold text-primary-dark">
                Our Teams
              </h1>
              <p className=" text-secondary">
                Beberapa tim dari Klenthik company.
              </p>
            </div>
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
            {team.map((item, idx) => {
              const icons = item.children;
              return (
                <div
                  key={idx}
                  className=" flex justify-center shadow border border-gray-100  py-20 rounded-3xl bg-white"
                >
                  <div>
                    <div className="flex justify-center">
                      <Image src={item.images} width={130} alt="" />
                    </div>
                    <h1 className="text-xl md:text-xl lg:text-xl py-5 font-semibold text-primary-dark">
                      {item.title}
                    </h1>
                    <div className="flex justify-center items-center">
                      {icons.map((item, idx) => (
                        <div key={idx} className="px-2">
                          <Link href={item.href}>
                            <item.Icons className=" text-xl text-secondary hover:text-primary-blue" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
