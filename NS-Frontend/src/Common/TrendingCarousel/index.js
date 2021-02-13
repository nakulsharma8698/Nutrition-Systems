import React, { Component } from "react";
import Slider from "react-slick";
import "./style.scss";
import messages from "./../../utils/messages";
import StarRating from "./../StartRating";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CountDown from "./../CountDown";
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
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };
  renderCount() {
    return (
      <div className="time-wrapper">
        <div className="time">
          <WatchLaterIcon className="icon" />{" "}
          <span className="time-text">Ends in</span>
          <CountDown secs={9000} showHours={true} />
        </div>
        <div className="corner"></div>
      </div>
    );
  }
  render() {
    return (
      <div className={`trending-carousel ${this.props.className}`}>
        <div className="heading">
          {this.props.heading}
          <Button
            variant="outlined"
            className="red-btn-outline view-more"
            color="secondary"
            onClick={() => this.props.history.push("/product")}
          >
            View All
          </Button>
        </div>
        <div className="sub-heading">{this.props.subheading}</div>

        <Slider {...this.settings}>
          {this.props.data &&
            this.props.data.map((item, index) => (
              <div key={index} className="main-item-wrapper">
                <div
                  className="item"
                  key={index}
                  onClick={() =>
                    this.props.history.push(
                      "/productdetails/" + item.product_id
                    )
                  }
                >
                  {this.props.showRibbon && (
                    <div class="ribbon ribbon-top-left">
                      <span>ribbon</span>
                    </div>
                  )}
                  <div className="image-wrapper">
                    <img
                      alt=""
                      className="type-image"
                      src={
                        item.type_vn === "Veg"
                          ? "/images/veg.png"
                          : "/images/non-veg.png"
                      }
                    />
                    <img
                      src={
                        item && item.images && item.images[0]
                          ? item.images[0].image
                          : ""
                      }
                      alt={
                        item && item.images && item.images[0]
                          ? item.images[0].alt_text
                          : ""
                      }
                    />
                  </div>
                  <div className="title">{item ? item.name : ""}</div>
                  <div className="product-final-offer">
                    <span className="current-price">
                      <span>&#8377;</span>
                      {item ? item.current_price : ""}
                    </span>
                    <strike className="original-price">
                      <span>&#8377;</span>
                      {item ? item.price : ""}
                    </strike>
                    <span className="discount">
                      {item ? item.discount : ""}
                      <span>
                        {"%"} {messages.common.off}
                      </span>
                    </span>
                  </div>
                  {this.props.showtimer && this.renderCount()}
                  <div className="product-rating">
                    <div className="rating">
                      <StarRating value={item.rating} edit={false} />
                    </div>
                    <span className="review-count">
                      ({item ? item.total : ""} {messages.common.reviews})
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}
export default withRouter(Carousel);
