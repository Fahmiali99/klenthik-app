import { activity } from "@/utils/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Activity() {
  return (
    <div className="bg-primary-blue-200">
      <div className="  container mx-auto h-full flex justify-center  items-center py-14 md:py-20 lg:py-20  px-4 sm:px-4 md:px-4 lg:px-0">
        <div>
          <div className="flex justify-center text-center">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl py-4 font-semibold text-primary-dark">
                Galeri Kegiatan
              </h1>
              <p className=" text-secondary">Ini adalah kegiatan kami</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
            {activity.map((item, idx) => (
              <div
                key={idx}
                className=" bg-white border border-gray-200 rounded-2xl shadow"
              >
                <div className="px-6 pt-6">
                  <Image
                    className="rounded-2xl w-full"
                    src={item.images}
                    alt=""
                  />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl tracking-tight text-primary-dark dark:text-white">
                    {item.title}
                  </h5>

                  <Link
                    href="/activity"
                    className="inline-flex items-center  py-2 text-sm font-medium text-center text-primary-blue"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
