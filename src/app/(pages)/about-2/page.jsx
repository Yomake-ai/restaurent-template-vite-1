import React, { lazy } from "react";
;

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import AboutTwoSection from "@components/sections/AboutTwo";
import FeaturesOneSection from "@/src/app/_components/sections/Features";
import PromoVideoSection from "@components/sections/PromoVideo";
import TeamSection from "@components/sections/Team";
import CallToActionSection from "@components/sections/CallToAction";

const TestimonialSlider = lazy(() => import("@components/sliders/Testimonial"));



const About2 = () => {
  return (
    <>
      <PageBanner pageTitle={"There is no <span>love</span> more sincere <br> than the love of <span>food</span>."} breadTitle={"About us"} description={"Consectetur numquam poro nemo veniam<br>eligendi rem adipisci quo modi."} type={2} />
      <AboutTwoSection />
      <FeaturesOneSection />
      <PromoVideoSection />
      <TeamSection items={3} />
      <TestimonialSlider />
      <CallToActionSection />
    </>
  );
};
export default About2;