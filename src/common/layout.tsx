import React, { useEffect, useState } from "react";
import NavigationBar from "./navbar";
import Up from "./up";
import FooterBar from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <NavigationBar />
      <main>{children}</main>
      <FooterBar />
    </div>
  );
}

export default Layout;
