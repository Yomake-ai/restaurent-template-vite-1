import React, { lazy } from "react";
;

import AppData from "@data/app.json";
import Products from '@data/products';

import PageBanner from "@components/PageBanner";
import PromoSection from "@components/sections/Promo";
import TeamSection from "@components/sections/Team";
import CategoriesSection from "@components/sections/Categories";

const ProductsSlider = lazy(() => import("@components/sliders/Products"));



const Shop = () => {
  return (
    <>
      <PageBanner pageTitle={"Online shop"} breadTitle={"Shop"} type={1} />
      <CategoriesSection heading={0} paddingTop={90} />
      <ProductsSlider 
        items={Products.collection['popular']} 
        title={'Most <span>popular</span> dishes'} 
        description={'Consectetur numquam poro nemo veniam<br>eligendi rem adipisci quo modi.'} 
        button={ {"link": "/products", "label": "View all", "icon": '/img/ui/icons/arrow.svg'} }
        slidesPerView={4}
        itemType={'product'} 
      />
      <ProductsSlider 
        items={Products.collection['bestseller']} 
        title={'Our <span>Bestsellers</span>'} 
        description={'Consectetur numquam poro nemo veniam<br>eligendi rem adipisci quo modi.'} 
        button={ {"link": "/products-2", "label": "View all", "icon": '/img/ui/icons/arrow.svg'} }
        slidesPerView={4}
        itemType={'product'} 
      />
      <TeamSection />
      <PromoSection />
    </>
  );
};
export default Shop;