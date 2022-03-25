import React from "react";
import BannerContent from "./BannerContent";
import BannerSearch from "./BannerSearch";
import BannerSidebar from "./BannerSidebar";
import './Banner.css';
const BannerLayout = () => {
  return (
    <div className="row">
      <div className="col-3">
        <BannerSidebar />
      </div>
      <div className="col-9">   
        <BannerSearch/>
        <BannerContent/>
      </div>
    </div>
  );
};

export default BannerLayout;
