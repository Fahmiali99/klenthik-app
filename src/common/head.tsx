import NextHead from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { MetaProps } from "../../types/layout";

export const WEBSITE_HOST_URL = "https://klenthik.com";

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: "Klenthik | Recycling Used Cooking Oil",
    description:
      "Kelnthik is a startup specializing in used cooking oil waste management",
    image: `${WEBSITE_HOST_URL}/assets/common/cover.png`,
    type: "website",
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Klenthik - Website" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </NextHead>
  );
};

export default Head;
