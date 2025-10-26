import React, { lazy } from "react";
;

import AppData from "@data/app.json";
import Products from '@data/products';

import HeroSection from "@components/sections/Hero";
import AboutTwoSection from "@components/sections/AboutTwo";
import FeaturesOneSection from "@components/sections/Features";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";

const ProductsSlider = lazy(() => import("@components/sliders/Products"));
const TestimonialSlider = lazy(() => import("@components/sliders/Testimonial"));



const Home2 = () => {
  return (
    <>
      <HeroSection type={2} />
      <AboutTwoSection />
      <FeaturesOneSection />
      <ProductsSlider items={Products.collection['popular']} slidesPerView={3} />
      <TestimonialSlider />
      <CallToActionTwoSection />
    </>
  );
};
export default Home2;