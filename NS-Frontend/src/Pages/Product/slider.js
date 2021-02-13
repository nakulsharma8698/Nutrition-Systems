import React, { Component } from "react";
import Slider from "react-slick";
import { API } from "../../axios";
import { apis } from "../../constants";
import "./style.scss";
export default class Carousel extends Component {
  state = { data: [] };
  async componentDidMount() {
    const response = await API.POST(apis.productbanner);

    if (response.success) {
      this.setState({ data: response.data });
    }
  }
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
        {this.state.data.map((item, index) => (
          <div className="product-slider" key={index}>
            <img src={item.deals[0].image} alt={item.deals[0].text} />
          </div>
        ))}
      </Slider>
    );
  }
}
