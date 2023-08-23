import { articles } from "@/utils/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Article() {
  return (
    <div className=" bg-primary-blue-200">
      <div className="w-screen flex max-w-7xl mx-auto px-4 sm:px-6 relative  ">
        <div className="w-full h-full flex justify-center items-center pb-24 ">
          <div>
            <div className="flex justify-center text-center">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl py-4 font-semibold text-primary-dark">
                  Artikel
                </h1>
                <p className=" text-secondary">
                  Temukan artikel terbaru dari kami.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
              {articles.map((item, idx) => (
                <div
                  key={idx}
                  className="max-w-lg lg:max-w-full bg-white border border-gray-200 rounded-xl shadow"
                >
                  <Link href="#">
                    <Image
                      className="rounded-t-xl w-full"
                      src={item.images}
                      alt=""
                    />
                  </Link>
                  <div className="p-5">
                    <div>
                      <h5 className="mb-2 text-xl tracking-tight text-primary-dark dark:text-white">
                        {item.title}
                      </h5>
                    </div>
                    <p className="mb-3 font-normal text-secondary dark:text-gray-400">
                      {item.children}
                    </p>
                    <Link
                      href="/article"
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
            <div className="flex justify-center pt-10">
              <Link
                href="/article"
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-primary-blue focus:outline-none bg-transparant border border-primary-blue hover:bg-primary-blue hover:text-white focus:z-10 focus:ring-4 focus:ring-blue-300 rounded-full"
              >
                Lihat semua
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
