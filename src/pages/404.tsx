import Layout from "@/common/layout";
import Image from "next/image";
import React from "react";
import notfound from "@/../public/assets/common/notfound.svg";
import Link from "next/link";

function NotFound() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-3rem)] flex justify-center items-center py-14 md:py-20 lg:py-20  px-4 sm:px-4 md:px-4 lg:px-0">
        <div>
          <Image src={notfound} alt="" />
          <h1 className=" text-primary-dark text-2xl tracking-tight text-center font-bold md:text-3xl ">
            Sorry, the page is not available!
          </h1>

          <div className="pt-8 flex justify-center">
            <Link
              href="/"
              className="text-white bg-primary-blue hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
