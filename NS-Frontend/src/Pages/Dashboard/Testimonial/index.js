import React from "react";
import { API } from "./../../../axios";
import { apis } from "./../../../constants";
import Slider from "react-slick";
import "./style.scss";
import { withRouter } from "react-router";
import StarRating from "./../../../Common/StartRating";
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
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
class Testimonial extends React.Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    const response = await API.POST(apis.testimonial);

    if (response.success) {
      this.setState({ posts: response.data });
    }
  }
  renderItem(item, index) {
    return (
      <div className="testimonial-carousel" key={index}>
        <div className="main-wrapper-carousel">
          <div className="star">
            <StarRating edit={false} value={item.rating} size={28} />
            <span className="date">DD/MM/YYYY</span>
          </div>
          <div className="review-title">title</div>
          <div className="testimonial-content">
            <div className="left-side">
              <img src={item.image[0].image} alt="" />
            </div>
            <div className="right-side">
              <div className="text">{item.review_text}</div>
              <div className="username">{item.username}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="testimonial-slider-component">
        <div className="heading"> Testimonial</div>
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {this.state.posts.map((item, index) =>
              this.renderItem(item, index)
            )}
          </Slider>
        </div>
      </div>
    );
  }
}
export default withRouter(Testimonial);
