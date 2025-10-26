import React, { lazy, Suspense } from "react";

import Products from '@data/products';

import HeroSection from "@components/sections/Hero"
import AboutSection from "@components/sections/About";
import CategoriesSection from "@components/sections/Categories";
import TeamSection from "@components/sections/Team";
import CallToActionSection from "@components/sections/CallToAction";

const ProductsSlider = lazy(() => import("@components/sliders/Products"));

function Home1() {
  return (
    <>
      <HeroSection type={1} />
      <AboutSection />
      <CategoriesSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsSlider items={Products.collection['popular']} slidesPerView={4} />
      </Suspense>
      <TeamSection />
      <CallToActionSection />
    </>
  );
}

export default Home1;