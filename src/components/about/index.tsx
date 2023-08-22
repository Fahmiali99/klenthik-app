import React from "react";
import Hero from "./detail/hero";
import Aboutme from "./detail/aboutme";
import Tupoksi from "./detail/tupoksi";
import Team from "./detail/team";
import Joinme from "./detail/information";
import Location from "./detail/location";
import BgHero from "./background/bghero";
import BgAbout from "./background/bgabout";
import BgHeroElement from "./background/bgheroelement";
import BgTupoksi from "./background/tupoksi";

function AboutPage() {
  return (
    <div>
      <BgHero />
      <Hero />
      <BgHeroElement />
      <BgAbout />
      <Aboutme />
      <BgTupoksi />
      <Tupoksi />
      <Team />
      <Joinme />
      <Location />
    </div>
  );
}

export default AboutPage;
