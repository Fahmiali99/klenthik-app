import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format, parseISO } from "date-fns";

function Content({ filterData, popular }: any) {
  return (
    <div className="container mx-auto  px-4 sm:px-4 md:px-4 lg:px-0">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 ">
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
                  <h5 className="mb-2 text-3xl tracking-tight text-primary-dark dark:text-white">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center ">
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
                          <h5 className="text-xl tracking-tight text-primary-dark dark:text-white">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center py-12">
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
                    <h5 className="text-xl w-full lg:w-3/4 tracking-tight text-primary-dark dark:text-white">
                      {item.title}
                    </h5>

                    <p className=" text-secondary pt-2">
                      Klenthik / {format(parseISO(item.date), " dd MMMM, yyyy")}
                    </p>
                  </div>
                </Link>
              </ul>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}

export default Content;
