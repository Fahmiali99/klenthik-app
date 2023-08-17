import Layout from "@/common/layout";
import Up from "@/common/up";
import React from "react";
import Image from "next/image";

interface ContentProps {
  filteredItems: any;
}

function ContentData(props: ContentProps) {
  const { filteredItems } = props;
  return (
    <div className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center pb-10">
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
                      <h5 className="text-xl w-full lg:w-3/4 tracking-tight text-primary-dark dark:text-white">
                        {item.title}
                      </h5>
                      <p className="text-secondary pt-2">{item.date}</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default ContentData;
