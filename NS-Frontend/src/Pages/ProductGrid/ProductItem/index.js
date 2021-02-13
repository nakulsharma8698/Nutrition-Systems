import React from "react";
import "./style.scss";

import StarRating from "./../../../Common/StartRating";
import messages from "./../../../utils/messages";
import { addToCart } from "./../../../actions/cartaction";
import { connect } from "react-redux";

class ProductItem extends React.Component {
  title = "MuscleBlaze Whey Gold Protein ,4 lb Rich Milk Chocolate";
  currentPrice = "3,999";
  originalPrice = "5,740";
  discount = "30% off";
  reviews = "1182 reviews";
  imgSrc = "./images/product-demo.png";

  state = { data: { images: [{}] }, isHovered: false };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  itemHover = isHover => {
    this.setState(prevState => ({
      isHovered: isHover
    }));
  };

  render() {
    const { isHovered, data } = this.state;
    const link = "/productdetails/" + data.product_id;

    return (
      <div
        className={`product-item ${isHovered ? "active" : ""}`}
        onMouseEnter={() => this.itemHover(true)}
        onMouseLeave={() => this.itemHover(false)}
        onClick={() => this.props.history.push(link)}
      >
        <div className="product-media">
          <img
            alt=""
            className="type-image"
            src={
              this.state.data.type_vn === "Veg"
                ? "/images/veg.png"
                : "/images/non-veg.png"
            }
          />
          <img
            className="product-image"
            src={this.state.data.images[0].image}
            alt={this.state.data.images[0].image_alt_text}
          />
        </div>
        <div className="product-content">
          <span className="limited-time-tag">
            <em className="fa fa-tag" />
            {messages.common.limited_offer}
          </span>
          <span className="product-title">{this.state.data.name}</span>
          <div className="product-final-offer">
            <span className="current-price">
              <span>&#8377;</span>
              {this.state.data.current_price}
            </span>
            <strike className="original-price">
              <span>&#8377;</span>
              {this.state.data.price}
            </strike>
            <span className="discount">
              {this.state.data.discount}
              <span>
                {"%"} {messages.common.off}
              </span>
            </span>
          </div>
          <div className="product-rating">
            <div className="rating">
              <StarRating value={this.state.data.rating} edit={false} />
            </div>
            <span className="review-count">
              ( {this.state.data.total} {messages.common.reviews} )
            </span>
          </div>
          <div className="product-action">
            <div className="action-group">
              <button
                type="button"
                className="btn btn-cart"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();

                  this.props.addToCart(this.state.data.product_id);
                }}
              >
                {messages.common.add_to_cart}
              </button>
              <button type="button" className="btn btn-buy">
                {messages.common.buy_now}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addToCart })(ProductItem);
