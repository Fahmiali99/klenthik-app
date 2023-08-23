import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format, parseISO } from "date-fns";

function Content({ filterData, popular }: any) {
  return (
    <div className="flex justify-center">
      <div className="w-screen  max-w-7xl mx-auto px-4 sm:px-6">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-14 ">
          <div className=" w-full hidden lg:block">
            {popular?.map((item: any, idx: number) => (
              <ul key={idx}>
                <Link href={item.href}>
                  <div>
                    <Image
                      className="w-full rounded-2xl "
                      src={item.images}
                      alt=""
                    />
                  </div>
                  <div className="py-6">
                    <h5 className=" font-semibold mb-2 text-3xl tracking-tight text-primary-dark dark:text-white">
                      {item.title}
                    </h5>
                    <p className=" text-secondary">
                      Klenthik / {format(parseISO(item.date), " dd MMMM, yyyy")}
                    </p>
                  </div>
                </Link>
              </ul>
            ))}
          </div>
          <div className=" ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center ">
              {filterData?.length
                ? filterData?.slice(0, 4)?.map((item: any, idx: number) => {
                    return (
                      <ul key={idx} className="rounded-2xl ">
                        <Link href={item.href}>
                          <Image
                            className="rounded-2xl w-full h-48 sm:h-72 lg:h-48"
                            src={item.images}
                            alt={item.title}
                          />

                          <div className="py-5 ">
                            <h5 className="font-semibold text-xl tracking-tight text-primary-dark dark:text-white">
                              {item.title}
                            </h5>

                            <p className=" text-secondary pt-2">
                              Klenthik /
                              {format(parseISO(item.date), " dd MMMM, yyyy")}
                            </p>
                          </div>
                        </Link>
                      </ul>
                    );
                  })
                : "Loading..."}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center py-4">
          {filterData?.length
            ? filterData.slice(5, 11).map((item: any, idx: number) => (
                <ul key={idx} className="rounded-2xl ">
                  <Link href={item.href}>
                    <Image
                      className="rounded-2xl w-full h-48 sm:h-72 lg:h-48"
                      src={item.images}
                      alt={item.title}
                    />

                    <div className="py-5">
                      <h5 className="text-xl font-semibold w-full lg:w-3/4 tracking-tight text-primary-dark dark:text-white">
                        {item.title}
                      </h5>

                      <p className=" text-secondary pt-2">
                        Klenthik /{" "}
                        {format(parseISO(item.date), " dd MMMM, yyyy")}
                      </p>
                    </div>
                  </Link>
                </ul>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}

export default Content;
