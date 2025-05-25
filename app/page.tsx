import React from "react";

import HeroSection from "@/components/sections/hero";
import ContributorPreview from "@/components/sections/contributors";
import Content from "@/components/sections/content";
import ComponentInfo from "@/components/sections/component-info";
import ComponentGallery from "@/components/sections/component-gallery";
import Solution from "@/components/sections/solution";
import TechStack from "@/components/sections/tech-stack";
import Timeline from "@/components/sections/time-line";
import Documents from "@/components/sections/documents";
import Banner from "@/components/sections/banner";
import Presentations from "@/components/sections/presentation";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact-us";

export default function Home() {
  return (
    <div className="flex flex-col mx-5">
      <HeroSection />
      <ContributorPreview />
      <Content />
      <ComponentInfo />
      <ComponentGallery />
      <Solution />
      <TechStack />
      <Timeline />
      <Documents />
      <Banner />
      <Presentations />
      <Team />
      <Contact />
    </div>
  );
}
