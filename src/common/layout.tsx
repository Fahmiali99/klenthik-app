import React, { useEffect, useState } from "react";
import NavigationBar from "./navbar";
import Up from "./up";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <NavigationBar />
      <Up />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
