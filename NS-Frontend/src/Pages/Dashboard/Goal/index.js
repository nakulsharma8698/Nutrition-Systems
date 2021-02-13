import React from "react";
import Slider from "react-slick";
import "./style.scss";
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
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: false,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
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
class Goal extends React.Component {
  state = {
    posts: [{}, {}, {}, {}]
  };
  async componentDidMount() {}
  renderItem(item, index) {
    return (
      <div className="goal-carousel" key={index}>
        <div className="main-wrapper">
          <img
            className="brand-image"
            src="/images/shop-brand.png"
            alt="user"
          />
          <div className="brand-name">Optimum Nutrition</div>
          <div className="brand-desc">
            Improve upon your charisma, These products will help you out.
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="goal-slider-component">
        <div className="heading"> Achieve Your Ultimate Goal</div>
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
export default Goal;
