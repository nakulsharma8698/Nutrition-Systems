import React from "react";
//import StarRating from "./../../../Common/StartRating";
import axios from 'axios';
import { Link } from "react-router-dom";
import { API } from "../../axios";
import { apis } from "../../constants";
import "./style.scss";
import messages from "./../../utils/messages";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import Carousel1 from "./../../Common/TrendingCarousel";
import StarRating from "./../../Common/StartRating";
import CountDown from "./../../Common/CountDown";
import LinearProgress from "@material-ui/core/LinearProgress";
import moment from "moment";
import Cookie from "js-cookie";
import Carousel from 'react-bootstrap/Carousel';
import { Component } from "react";
import Slider from "react-slick";
import Icon from "@material-ui/core/Icon";

import Stepper from "./Stepper";
import { addToCart } from "./../../actions/cartaction";
import { connect } from "react-redux";


class ProdDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products:[]
    };
  }
  //const data;
  componentDidMount(){
    //const product_id = this.props.match.params.product_id;
    axios.get('http://localhost:4000/details/'+ this.props.match.params.product_id)
    .then(res => {
        this.setState({ products: res.data});
        console.log(res.data);
    })
    .catch(function (error){
        console.log(error);
    })
  
  }
 
  render() {
    var amt= 1;
    return (
      
      <React.Fragment>
      <div> {this.state.products.map(prod =>
          <div className="product-details-wrapper" >
          <div className="product-info">
              <div className=" left imageBox">
              
                <img src={prod.img} alt="" />
              </div>

              <div className="right">
              
              <div className="india-flag">
                <img
                        alt=""
                        className="india-flag"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD_yW2Mz5wVuSjE1j4JFJ-6TUc12GkWLLm3_dKoJf6wPbEASq6"
                />
                </div>
                <div className="vendor">
                  A <span>{prod.category}</span> Product
                </div>
                <div className="title">{prod.brand} {prod.title}</div>
                <div className="seperator"></div>
                <div className="desc">{prod.desc}</div>
                <div className="product-rating">
                  <div className="rating">
                  <StarRating value={5} />
                  </div>
                  <span className="review-count">
                    {2565} {"Revies"}
                  </span>
                  <span>Share</span>
                </div>
                <div>
                  <span>Shipping Area : NOIDA 201301 </span>
                  <span className="change">Change</span>
                </div>
                <div>
                  <span>
                    Order in next 5 mins & get a shaker free 
                    <br/>
                    Time Left -
                    <span className="timer">
                    {" "}
                    <CountDown secs={300} />
                    </span>

                  </span>
                  {/* <span className="change">Change</span> */}
                </div>
              </div>
              <div className="botom-section">
                <div className="info-point">
                  <em className="icon icon-coin-stack" />
                  <span>Earn Points on everthing</span>
                </div>
                <div className="info-point order">
                  <em className="icon icon-protein-powder" />
                  <span>Order in next 5 mins & get a shaker free</span>
                </div>
                <div className="info-point">
                  <em className="icon icon-delivery-truck" />
                  <span>Sample Text</span>
                </div>
                <div className="info-point last">
                  <em className="icon icon-credit-card" />
                  <span>Sample Text</span>
                </div>
              </div>
            </div>
            <div className="buying-options-wrapper">
              <div className="maxwidth">
                <div className="heading">Buying Options</div>
                <div className="stock-info">{"In Stock"}</div>
                <div className="product-final-offer">
                  <span className="current-price">
                    <span>&#8377;</span>
                    {amt = Math.round(prod.price - (prod.price*((prod.discount)/100)) )}
                  </span>
                  <strike className="original-price">
                    <span>&#8377;</span>
                    {prod.price}
                  </strike>
                  <span className="discount">
                    {prod.discount}
                    <span>
                      {"%"} {"Off"}
                    </span>
                  </span>
                </div>

                <div className="dropdown">
                  <span className="dd-label">Flavour</span>
                  {/*<Select
                    options={"Original"}
                    placeholder="Pick your Flavour"
                    getOptionLabel={option => option["flavor"]}
                    getOptionValue={option => option["_id"]}
                    isSearchable={false}
                  />
                </div>
                <div className="dropdown">
                  <span className="dd-label">Weight</span>
                  {/*<Select
                    options={"500 Grams"}
                    placeholder="Select Weight"
                    getOptionLabel={option => option["weight"]}
                    getOptionValue={option => option["_id"]}
                    isSearchable={false}
                  />*/}
                </div>
                <div className="stepper-detail">
                  <div>Quantity</div>
                  <Stepper />
                </div>
                <div className="btn-wrapper">
                  <button
                    variant="outlined"
                    className="raise orange-button"
                    color="secondary"
                    onClick={() => this.props.addToCart(prod.product_id)}
                  >
                    {messages.common.add_to_cart}
                  </button>
                  <button
                    variant=""
                    color=""
                    className=" raise orange-button "

                    onClick={() => this.addToWishlist(prod.product_id)}
                  >
                    Wishlist
                  </button>
                </div>
                <Link to={{
                  pathname:'/checkout',
                  state:{
                    price:amt
                  }
                }} >
                <button
                  className="raise buy-now"
                >
                  Buy Now
                </button></Link>
                
              </div>
            </div>


            </div>
          )}
      </div>
      </React.Fragment>
    );
  }
}

export default ProdDetails;
