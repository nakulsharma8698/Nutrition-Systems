import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      arrows: false
    };
    return (
      <Slider {...settings}>
        <div className="blog-slider">
          <img src="/images/blogslider.png" alt="" />
        </div>
        <div className="blog-slider">
          <img src="/images/blogslider.png" alt="" />
        </div>
        <div className="blog-slider">
          <img src="/images/blogslider.png" alt="" />
        </div>
      </Slider>
    );
  }
}
