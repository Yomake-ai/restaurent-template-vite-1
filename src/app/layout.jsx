import "@styles/css/plugins/bootstrap.min.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/font-awesome.min.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import '@styles/scss/style.scss';
import "./globals.css";

import ScrollbarProgress from "@layouts/scrollbar-progress/Index";

import AppData from "@data/app.json";



const Layouts = ({
  children
}) => {
  return (
    <html lang="en">
      <body>
        {/* app wrapper */}
        <div className="sb-app">
          {children}

          <ScrollbarProgress />
        </div>
        {/* app wrapper end */}
      </body>
    </html>
  );
};
export default Layouts;
