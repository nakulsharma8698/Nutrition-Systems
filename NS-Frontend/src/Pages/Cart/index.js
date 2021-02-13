import React from "react";
import "./style.scss";
import messages from "./../../utils/messages";
import StarRating from "./../../Common/StartRating";
import { API } from "../../axios";
import { apis } from "../../constants";

export default class Cart extends React.Component {
  coupon = [
    { text: "User 50", terms: "Terms & Conditions" },
    { text: "User 30", terms: "Terms & Conditions" },
    { text: "User 50", terms: "Terms & Conditions" },
    { text: "User 30", terms: "Terms & Conditions" },
    { text: "User 50", terms: "Terms & Conditions" },
    { text: "User 30", terms: "Terms & Conditions" }
  ];
  offer = [
    {
      text: "Multivitamin @ Rs. 325 (Flat 50% Off)",
      terms: "Terms & Conditions"
    },
    {
      text: "Multivitamin @ Rs. 325 (Flat 50% Off)",
      terms: "Terms & Conditions"
    },
    {
      text: "Multivitamin @ Rs. 325 (Flat 50% Off)",
      terms: "Terms & Conditions"
    },
    {
      text: "Multivitamin @ Rs. 325 (Flat 50% Off)",
      terms: "Terms & Conditions"
    },
    {
      text: "Multivitamin @ Rs. 325 (Flat 50% Off)",
      terms: "Terms & Conditions"
    },
    {
      text: "Multivitamin @ Rs. 325 (Flat 50% Off)",
      terms: "Terms & Conditions"
    }
  ];
  items = [
    {
      title: "AllMax Nutrition Caffeine - 100 tablets",
      price: "3999",
      original_price: "5749",
      discount: "30",
      reviews: 1182,
      image: "/images/shop-brand.png"
    }
  ];
  async getCartData(id) {
    if (!this.isLogin) {
      window.alert("You need to login");
    } else {
      await API.POST(apis.cart); // response was not coming at the time of development static for now
    }
  }
  render() {
    return (
      <div className="cart-wrapper">
        <div className="top-section">
          <div className="items-wrapper">
            <div className="heading">My Cart</div>
            {this.items.map((item, index) => (
              <React.Fragment key={index}>
                <div className="item-wrapper">
                  <img src={item.image} className="product-image" alt="" />
                  <div>
                    <div className="product-title">{item.title}</div>
                    <div>
                      <span className="current-price">
                        <span>&#8377;</span>
                        {item.price}
                      </span>
                      <span className="original-price">
                        <span>&#8377;</span>
                        {item.original_price}
                      </span>
                      <span className="discount">
                        {item.discount}
                        <span>
                          {"%"} {messages.common.off}
                        </span>
                      </span>
                    </div>
                    <div className="rating">
                      <StarRating />
                      <span className="review-count">
                        {item.reviews} {messages.common.reviews}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="stepper">
                  <span className="minus">-</span>
                  <span className="value">1</span>
                  <span className="plus">+</span>
                </div>
              </React.Fragment>
            ))}
            <div className="apply-coupon">
              <input type="text" placeholder="Coupon Code" />
              <button className="apply-btn">Apply Coupon</button>
              <button className="continue-btn">Continue Shopping</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="heading">Price</div>
            <div className="subtotal">
              <span>Sub Total</span>
              <span>&#8377;3999</span>
            </div>
            <div className="shipping">
              <span>Shipping</span>
              <span>&#8377;49</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>&#8377;4049</span>
            </div>
            <button className="place-order">PLACE ORDER</button>
          </div>
        </div>
        <div className="coupons-wrapper">
          <div className="coupons">
            <div className="title">Apply Coupon</div>
            {this.coupon.map((coupon, index) => {
              return (
                <div className="offer" key={index}>
                  <input type="radio" />
                  <div className="coupon-info">
                    <div>{coupon.text}</div>
                    <div>
                      <a href="#">{coupon.terms} </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="offers">
            <div className="title">Apply Offers</div>
            {this.offer.map((coupon, index) => {
              return (
                <div className="offer" key={index}>
                  <input type="radio" />
                  <div className="coupon-info">
                    <div>{coupon.text}</div>
                    <div>
                      <a href="#">{coupon.terms} </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
