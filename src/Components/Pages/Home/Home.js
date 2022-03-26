import React from "react";
import Layout from "../../Layout/Layout";
import BannerLayout from "./Banner/BannerLayout";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import "./Home.css";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
const Home = () => {
  return (
    <Layout>
      <BannerLayout />
      <ProductCarousel />
      <FeaturedProduct />
    </Layout>
  );
};

export default Home;
