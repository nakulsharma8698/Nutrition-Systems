import React from "react";
import "./style.scss";
import { API } from "./../../axios";
import { apis } from "./../../constants";
import StarRating from "./../../Common/StartRating";
import messages from "./../../utils/messages";

class Wishlist extends React.Component {
  state = {
    items: []
  };
  async componentDidMount() {
    const response = await API.POST(apis.wishlist);
    if (response.success) {
      this.setState({ items: response.data });
    }
  }
  renderItem(item, index) {
    return (
      <div className="product-list-item" key={index}>
        <div className="list-media">
          <img
            className="product-image"
            src={item.images[0].image}
            alt={item.images[0].image_alt_text}
          />
        </div>
        <div className="product-details">
          <div>
            <span className="product-title">{item.name}</span>
          </div>
          <div>
            <span className="current-price">
              <span>&#8377;</span>
              {item.price}
            </span>
            <span className="original-price">
              <span>&#8377;</span>
              {item.originalprice}
            </span>
            <span className="discount">
              {item.discount}
              <span>
                {"%"} {messages.common.off}
              </span>
            </span>
          </div>
          <div className="rating">
            <StarRating value={item.rating} edit={false} />
            <span className="review-count">
              ( {item.total} {messages.common.reviews} )
            </span>
          </div>
        </div>
        <div className="product-action">
          <span>Added on </span>
          <button type="button" className="btn btn-cart">
            {messages.common.add_to_cart}
          </button>
          <span>Remove</span>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="wishlist-wrapper">
        {this.state.items.map((item, index) => this.renderItem(item, index))}
      </div>
    );
  }
}
export default Wishlist;
