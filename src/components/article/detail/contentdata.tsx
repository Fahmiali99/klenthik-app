import Layout from "@/common/layout";
import Up from "@/common/up";
import React from "react";
import Image from "next/image";
import { format, parseISO } from "date-fns";

interface ContentProps {
  filteredItems: any;
}

function ContentData(props: ContentProps) {
  const { filteredItems } = props;
  return (
    <div className="flex justify-center">
      <div className="w-screen  max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center pb-10">
          {filteredItems.slice(0, 6).map((item: any, idx: number) => {
            return (
              <ul key={idx} className="rounded-2xl ">
                <li>
                  <a href={item.href}>
                    <div className="rounded-2xl">
                      <Image
                        className="rounded-2xl w-full h-48 sm:h-72 lg:h-48"
                        src={item.images}
                        alt={item.title}
                      />
                      <div className="py-5">
                        <h5 className="text-xl font-semibold w-full lg:w-3/4 tracking-tight text-primary-dark dark:text-white">
                          {item.title}
                        </h5>
                        <p className="text-secondary pt-2">
                          Klenthik /
                          {format(parseISO(item.date), " dd MMMM, yyyy")}
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContentData;
