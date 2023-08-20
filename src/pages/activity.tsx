import React from "react";
import Layout from "@/common/layout";
import Up from "@/common/up";
import Link from "next/link";
import Image from "next/image";
import { getPostMetadata } from "@/common/getPostMetadata";
import { format, parseISO } from "date-fns";

function Activity({ postMetadata }: any) {
  return (
    <Layout>
      <Up />
      <div className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center pb-10">
          {postMetadata?.map((post: any, idx: any) => (
            <div key={idx} className="rounded-2xl ">
              <Link href={`/activity/${post.slug}`}>
                <div className="rounded-2xl">
                  <Image
                    className="rounded-2xl w-full h-48 sm:h-72 lg:h-48"
                    src={post.image}
                    width={100}
                    height={100}
                    alt=""
                  />
                  <div className="py-5">
                    <h5 className="text-xl w-full lg:w-3/4 tracking-tight text-primary-dark dark:text-white">
                      {post.title}
                    </h5>
                    <p className="text-secondary pt-2">
                      {format(parseISO(post.date), "MMMM dd, yyyy")}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const postMetadata = getPostMetadata();
  return {
    props: {
      postMetadata,
    },
  };
}

export default Activity;
