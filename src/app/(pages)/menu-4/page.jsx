import React, { lazy } from "react";
;

import AppData from "@data/app.json";
import MenuData from "@data/menu.json";

import PageBanner from "@components/PageBanner";
import PromoSection from "@components/sections/Promo";

const MenuFiltered = lazy(() => import("@components/menu/MenuFiltered"));



const Menu4 = () => {
  return (
    <>
      <PageBanner pageTitle={"Only <span>appetite</span> <br>Can be lacking in <span>cooking</span>"} description={"Consectetur numquam poro nemo veniam<br>eligendi rem adipisci quo modi."} breadTitle={"Menu"} type={2} />
      
      {/* menu section 1 */}
      <section className="sb-menu-section sb-p-90-60">
        <div className="sb-bg-1">
          <div></div>
        </div>
        <div className="container">
          <MenuFiltered categories={MenuData.categories} columns={3} />
        </div>
      </section>
      {/* menu end */}

      <PromoSection />
    </>
  );
};
export default Menu4;