import React from "react";
import Layout from "@/common/layout";
import Up from "@/common/up";
import { getPostMetadata } from "@/common/getPostMetadata";
import ActivityPage from "@/components/activity";

function Activity({ postMetadata }: any) {
  return (
    <Layout>
      <Up />
      <div className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center pb-10">
          {postMetadata?.map((item: any, idx: any) => (
            <ActivityPage
              key={idx}
              slug={item.slug}
              image={item.image}
              title={item.title}
              date={item.date}
            />
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
