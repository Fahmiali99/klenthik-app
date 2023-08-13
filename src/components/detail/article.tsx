import { articles } from "@/utils/home";
import Image from "next/image";
import React from "react";

function Article() {
  return (
    <div className="bg-primary-blue-200">
      <div className="  container mx-auto h-full flex justify-center items-center py-14 md:py-20 lg:py-20  px-4 sm:px-4 md:px-4 lg:px-0">
        <div>
          <div className="flex justify-center text-center">
            <div>
              <h1 className="text-3xl md:text-3xl lg:text-4xl py-4 font-semibold text-primary-dark">
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
                <a href="#">
                  <Image
                    className="rounded-t-xl w-full"
                    src={item.images}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-xl tracking-tight text-primary-dark dark:text-white">
                      {item.title}
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-secondary dark:text-gray-400">
                    {item.children}
                  </p>
                  <a
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
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
