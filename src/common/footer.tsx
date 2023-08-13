import React from "react";
import logo from "@/../public/assets/common/logo.png";
import Image from "next/image";
import Link from "next/link";
import { menu, sosmed } from "@/utils/footer";

function FooterBar() {
  return (
    <footer className="bg-brown  relative">
      <div className="container mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                width={70}
                className="mr-3"
                alt="FlowBite Logo"
              />
              <span className="text-white self-center text-2xl font-semibold whitespace-nowrap ">
                Klenthik
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {menu.map((item, idx) => {
              const children = item.children;
              return (
                <div key={idx}>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                    {item.title}
                  </h2>
                  {children.map((item, idx) => (
                    <ul key={idx} className=" text-gray-400 font-medium">
                      <li className="mb-4">
                        <a href={item.href} className="hover:underline">
                          {item.name}
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center ">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              Klenthik
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {sosmed.map((item, idx) => (
              <div key={idx}>
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-gray-200 "
                >
                  <item.Icons />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
