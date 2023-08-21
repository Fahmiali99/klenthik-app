import React, { useEffect, useState } from "react";
import NavigationBar from "./navbar";
import FooterBar from "./footer";
import Head from "./head";
import { LayoutProps } from "../../types/layout";

export const WEBSITE_HOST_URL = "https://klenthik.com";

function Layout({ children, customMeta }: LayoutProps): JSX.Element {
  return (
    <>
      <Head customMeta={customMeta} />
      <NavigationBar />
      <main>{children}</main>
      <FooterBar />
    </>
  );
}

export default Layout;
