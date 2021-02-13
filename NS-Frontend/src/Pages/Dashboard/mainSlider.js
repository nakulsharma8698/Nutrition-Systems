import React, { Component } from "react";
import Slider from "react-slick";
import "./style.scss";
import { withRouter } from "react-router";
import { API } from "./../../axios";
import { apis } from "./../../constants";
const SamplePrevArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa fa-chevron-left arrows"></i>
    </div>
  );
};
const SampleNextArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa fa-chevron-right arrows"></i>
    </div>
  );
};

class Carousel extends Component {
  settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  state = {
    data: []
  };
  async componentDidMount() {
    const response = await API.POST(apis.homebanner);

    if (response.success) {
      this.setState({ data: response.data });
    }
  }
  render() {
    return (
      <div className="trending-carousel">
        <Slider {...this.settings}>
          {this.state.data.map((item, index) => (
            <div className="dashboard-slider" key={index}>
              <img src={item.deals[0].image} alt={item.deals[0].text} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
export default withRouter(Carousel);
