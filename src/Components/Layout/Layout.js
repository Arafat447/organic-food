import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
