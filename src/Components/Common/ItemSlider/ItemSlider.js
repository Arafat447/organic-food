import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ItemSlider = ({ settings, children }) => {
  return (
    <Slider onSwipe={(l) => console.log(l)} {...settings}>
      {children}
    </Slider>
  );
};

export default ItemSlider;
