import React from "react";
import { API } from "./../../axios";
import { apis } from "./../../constants";
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
  slidesToShow: 5,
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
        slidesToShow: 4,
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
class InstaPosts extends React.Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    const response = await API.POST(apis.instaPosts);

    if (response.success) {
      this.setState({ posts: response.data });
    }
  }
  render() {
    return (
      <div className="insta-component">
        <div className="heading"> Insta Posts</div>
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {this.state.posts.map((item, index) => (
              <div className="post" key={item.id}>
                <img src={item.media_url} alt="insta post" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
export default InstaPosts;
