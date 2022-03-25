import React from "react";
import Layout from "../../Layout/Layout";
import BannerLayout from "./Banner/BannerLayout";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import "./Home.css";
const Home = () => {
  return (
    <Layout>
      <BannerLayout />
      <FeaturedProduct />
    </Layout>
  );
};

export default Home;
