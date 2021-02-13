import React from "react";
import "./st.scss";
import Select from "react-select";
//import StarRating from "./../../../Common/StartRating";
import axios from 'axios';
import { API } from "../../axios";
import ProductGrid from "../ProductGrid";
import Loader from "./../../Common/Loader";

export default class Prod extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount(){

        axios.get('http://localhost:4000/addProduct/')
        .then(res => {
            this.setState({ products: res.data });
        })
        .catch(function (error){
            console.log(error);
        })
      
      }
    state = {isHovered: false };
    itemHover = isHover => {
        this.setState(prevState => ({
          isHovered: isHover
        }));
      };

  render() {
    const { isHovered } = this.state;
    //const link = "/productdetails/" + this.state.products.product_id;
    return (
      <React.Fragment>
          {this.state.products.map(prod =>
          
            <div className = "product-grid-area">
            <div
            className={`product-item ${isHovered ? "active" : ""}`}
            onMouseEnter={() => this.itemHover(true)}
            onMouseLeave={() => this.itemHover(false)}
            onClick={() => this.props.history.push("/details/" +prod.product_id)}
            >
                    <div className="product-media">
                    <img
                        alt=""
                        className="type-image"
                        src="/images/veg.png"
                    />
                    <img
                        className="product-image"
                        src={prod.img}
                    />
                    </div>
                    <div className="product-content">
                        <span className="limited-time-tag">
                        <em className="fa fa-tag" />
                        Limited Time Offer
                        </span>
                        <span className="product-title"   key={prod.title}><b>{prod.brand} {prod.title} </b></span>
                        <div className="product-final-offer">
                            <span className="current-price">
                            <span>&#8377;</span>
                            {Math.round(prod.price - (prod.price*((prod.discount)/100)) )}
                            </span>
                            <strike className="original-price">
                            <span>&#8377;</span>
                            {prod.price}
                            </strike>
                            <span className="discount">
                            {prod.discount}
                            <span>
                                {"%"} Off
                            </span>
                            </span>
                        </div>
                        
                        <div className="product-rating">
                            <div className="rating">
                            {/*<StarRating value={this.state.data.rating} edit={false} />*/}
                            </div>
                            <span className="review-count">
                            ( 5 reviews )
                            </span>
                        </div>

                        <div className="product-action">
                            <div className="action-group">
                            <button
                                type="button"
                                className="btn btn-cart"
                                /*onClick={e => {
                                e.preventDefault();
                                e.stopPropagation();

                                this.props.addToCart(this.state.data.product_id);
                                }}*/
                            >
                               Add to Cart
                            </button>
                            <button type="button" className="btn btn-buy">
                                Buy Now
                            </button>
                            </div>
          </div>
                    </div>

            </div>

            </div>
          
        
            )}
      </React.Fragment>
    );
  }
}
