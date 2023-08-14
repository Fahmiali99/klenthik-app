import React from "react";
import Hero from "./detail/hero";
import Aboutme from "./detail/aboutme";
import Tupoksi from "./detail/tupoksi";
import Team from "./detail/team";
import Joinme from "./detail/information";
import Location from "./detail/location";

function AboutPage() {
  return (
    <div>
      <Hero />
      <Aboutme />
      <Tupoksi />
      <Team />
      <Joinme />
      <Location />
    </div>
  );
}

export default AboutPage;
