import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import BannerSearch from "../Pages/Home/Banner/BannerSearch";
import BannerSidebar from "../Pages/Home/Banner/BannerSidebar";

const ProductDetail = () => {
  const params = useParams();
  return (
    <Layout>
      <div className="row">
          <div className="col-md-3">
              <BannerSidebar/>
          </div>
          <div className="col-md-9">
              <BannerSearch/>
          </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
