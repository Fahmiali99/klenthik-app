import React from "react";
import Hero from "./detail/hero";
import Aboutme from "./detail/aboutme";
import Content from "./detail/content";
import Information from "./detail/information";
import Article from "./detail/article";
import Activity from "./detail/activity";

function HomePage() {
  return (
    <div>
      <Hero />
      <Aboutme />
      <Content />
      <Information />
      <Activity />
      <Article />
    </div>
  );
}

export default HomePage;
