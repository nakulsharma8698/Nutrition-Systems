import React from "react";
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

class ProductDetails extends React.Component {
  state = {
    data: null,
    product: null,
    similar: null,
    deals: [],
    graph: {},
    reviews: [],
    overallRating: 0,
    total: 0
  };
  componentDidMount() {
    this.getProducts();
    this.getTodaysDeals();
    this.isLogin = Cookie.get("token") ? true : false;
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getProducts();
    }
  }
  async getTodaysDeals() {
    //const date = "2019-07-18T21:33:46.097+00:00";
    const date = new Date().toISOString();
    const response = await API.POST(apis.deals, { date: date });
    if (response.success) {
      this.setState({
        deals: [...response.data.items]
      });
    }
  }

  async addToWishlist(id) {
    if (!this.isLogin) {
      window.alert("You need to login");
    } else {
      await API.POST(apis.wishlist, { type: "add", id: id });
    }
  }
  getProducts = async () => {
    const id = this.props.match.params.id;

    const response = await API.GET(apis.productDetails + id);
    if (response.success) {
      this.setState(
        {
          data: response.data,
          isLoaded: true,
          product: response.data.product,
          similar: response.data.similar,
          graph: response.data.graph,
          reviews: response.data.reviews,
          overallRating: response.data.product.rating,
          total: response.data.product.total
        },
        window.scrollTo({ top: 0, behavior: "smooth" })
      );
    }
  };
  render() {
    const pStyle = {
      width:'100%',
      textAlign: 'center'
    };
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    const dealSlider = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
    };
    const product = this.state.product;
    return (
      <React.Fragment>
        {this.state.product && (
          <div className="product-details-wrapper" >
            <div className="product-info">
              <div className=" left imageBox">
             
                <img src={product.images[0].image} alt="" />
            
            
                <img class=" hoverImg" src="https://lh5.googleusercontent.com/-gRq6iatuNYA/AAAAAAAAAAI/AAAAAAAAANk/674knqRN1KI/photo.jpg" alt=""/>
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
                  A <span>{product.prime_category}</span> Product
                </div>
               
                
                <div className="title">{product.name}</div>
                <div className="seperator"></div>
                <div className="desc">{product.long_desc[0].content}</div>
                <div className="product-rating">
                  <div className="rating">
                    <StarRating value={product.rating} />
                  </div>
                  <span className="review-count">
                    {product.total} {messages.common.reviews}
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
                <div className="stock-info">{this.state.product.stock}</div>
                <div className="product-final-offer">
                  <span className="current-price">
                    <span>&#8377;</span>
                    {product.current_price}
                  </span>
                  <strike className="original-price">
                    <span>&#8377;</span>
                    {product.price}
                  </strike>
                  <span className="discount">
                    {product.discount}
                    <span>
                      {"%"} {messages.common.off}
                    </span>
                  </span>
                </div>

                <div className="dropdown">
                  <span className="dd-label">Flavour</span>
                  <Select
                    options={product.other_flavors}
                    placeholder="Pick your Flavour"
                    getOptionLabel={option => option["flavor"]}
                    getOptionValue={option => option["_id"]}
                    isSearchable={false}
                  />
                </div>
                <div className="dropdown">
                  <span className="dd-label">Weight</span>
                  <Select
                    options={product.other_weights}
                    placeholder="Select Weight"
                    getOptionLabel={option => option["weight"]}
                    getOptionValue={option => option["_id"]}
                    isSearchable={false}
                  />
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
                    onClick={() => this.props.addToCart(product.product_id)}
                  >
                    {messages.common.add_to_cart}
                  </button>
                  <button
                    variant=""
                    color=""
                    className=" raise orange-button "

                    onClick={() => this.addToWishlist(product.product_id)}
                  >
                    Wishlist
                  </button>
                </div>
                <button
                  className="raise buy-now"
                >
                  Buy Now
                </button>
              </div>
            </div>
      
          
            <div className="deals-wrapper">
              <div className="title">DEALS</div>
              <Slider {...dealSlider}>
                <div className="slider-item">
                  <img src="https://cdn.muscleandstrength.com/store/media/mnsresized/promos/de33a7/98/98/vapor-x5-next-gen-rasp-lem_6.jpg" />
                  <div className="deal-info">
                    <div className="deal-label"><span>Buy 2 for ₹2,623.41</span></div>
                    <p>Buy 2 MuscleTech Vapor X5 Next Gen 30sv for only ₹2,623.41! Limited time only.</p>
                  </div>
                </div>
                <div className="slider-item">
                  <img src="https://cdn.muscleandstrength.com/store/media/mnsresized/promos/7a916b/98/98/vapor-x5-thumb_1.jpg" />
                  <div className="deal-info">
                    <div className="deal-label"><span>Buy 2 for ₹2,623.41</span></div>
                    <p>Buy 2 MuscleTech Vapor X5 Next Gen 30sv for only ₹2,623.41! Limited time only.</p>
                  </div>
                </div>
                <div className="slider-item">
                  <img src="https://cdn.muscleandstrength.com/store/media/mnsresized/promos/de33a7/98/98/vapor-x5-next-gen-rasp-lem_6.jpg" />
                  <div className="deal-info">
                    <div className="deal-label"><span>Buy 2 for ₹2,623.41</span></div>
                    <p>Buy 2 MuscleTech Vapor X5 Next Gen 30sv for only ₹2,623.41! Limited time only.</p>
                  </div>
                </div>
                <div className="slider-item">
                  <img src="https://cdn.muscleandstrength.com/store/media/mnsresized/promos/7a916b/98/98/vapor-x5-thumb_1.jpg" />
                  <div className="deal-info">
                    <div className="deal-label"><span>Buy 2 for ₹2,623.41</span></div>
                    <p>Buy 2 MuscleTech Vapor X5 Next Gen 30sv for only ₹2,623.41! Limited time only.</p>
                  </div>
                </div>
                <div className="slider-item">
                  <img src="https://cdn.muscleandstrength.com/store/media/mnsresized/promos/de33a7/98/98/vapor-x5-next-gen-rasp-lem_6.jpg" />
                  <div className="deal-info">
                    <div className="deal-label"><span>Buy 2 for ₹2,623.41</span></div>
                    <p>Buy 2 MuscleTech Vapor X5 Next Gen 30sv for only ₹2,623.41! Limited time only.</p>
                  </div>
                </div>
                <div className="slider-item">
                  <img src="https://cdn.muscleandstrength.com/store/media/mnsresized/promos/7a916b/98/98/vapor-x5-thumb_1.jpg" />
                  <div className="deal-info">
                    <div className="deal-label"><span>Buy 2 for ₹2,623.41</span></div>
                    <p>Buy 2 MuscleTech Vapor X5 Next Gen 30sv for only ₹2,623.41! Limited time only.</p>
                  </div>
                </div>
              </Slider>
            </div>

            <div className="product-desc-wrapper">
              <div className="title">PRODUCT DECRIPTION</div>
              <div>{this.state.product.long_desc[0].content}</div>
            </div>
            <div className="nutrition-info-wrapper">
              <div className="maxwidth">
                <div className="heading">Nutrition info</div>
                <div className="content">{this.state.product.ingredients}</div>
              </div>
            </div>
            <div className="slider-wrapper">
              <div className="title" >
                <span className="center" style={pStyle}>SIMILAR PRODUCTS</span>
              </div>
              <Slider {...settings}>
                <div className="slider-item">
                  <h3>1</h3>
                </div>
                <div className="slider-item">
                  <h3>2</h3>
                </div>
                <div className="slider-item">
                  <h3>3</h3>
                </div>
                <div className="slider-item">
                  <h3>4</h3>
                </div>
                <div className="slider-item">
                  <h3>5</h3>
                </div>
                <div className="slider-item">
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
            <div className="rating-review-wrapper">
              <div className="title" >
                <span className="center" style={pStyle}>RATING & REVIEW{" "}</span>
                
              </div>
              <div className="top-section">
                <div className="rating-section">
                  <div className="heading">Overall Rating</div>
                  <div className="star-rating">
                    <StarRating
                      size={36}
                      value={this.state.overallRating}
                      edit={false}
                    />
                  </div>
                  <div className="rating-info">
                    {this.state.overallRating} start out of 5
                  </div>
                  <div className="review-info">
                    <div className="center"><Icon className="fa fa-pencil" /> Reviews ({this.state.reviews.length.toLocaleString()}) </div>
                    <div className="center border-top"><Icon className="fa fa-shield" />Verfied Buyers ({this.state.total.toLocaleString()}{" "})
                    </div> 
                    
                  </div>
                </div>
                <div className="review-graph">
                  <div className="heading">Review Graph</div>
                  {Object.keys(this.state.graph).reverse().map(item => (
                    <div className="graph-item">
                      <div className="star-name">{item + " Star"}</div>
                      <LinearProgress
                        variant="determinate"
                        value={
                          (this.state.graph[item] / this.state.reviews.length) *
                          100
                        }
                        color="secondary"
                      />
                      <div className="count">{(this.state.graph[item] / this.state.reviews.length) *
                          100}%</div>
                    </div>
                  ))}
                </div>
                <div className="top-rated-container">
                  <div className="heading">TOP RATED FLAVORS</div>
                  <div className="top-rated-section">
                    <div className="top-rated-row">
                      <div className="top-rated-col-title">Icy Rocket Freeze (4.7/5)</div>
                      <div className="top-rated-col-value"><StarRating size={36} value="4.7" edit={false}/></div>
                    </div>
                    <div className="top-rated-row">
                      <div className="top-rated-col-title">Blue Raspberry Fusion (4.7/5)</div>
                      <div className="top-rated-col-value"><StarRating size={36} value="4.7" edit={false}/></div>
                    </div>
                    <div className="top-rated-row">
                      <div className="top-rated-col-title">Fruit Punch (4.7/5)</div>
                      <div className="top-rated-col-value"><StarRating size={36} value="4.7" edit={false}/></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="see-more">
                <a>See More+</a>
              </div>

              <div className="center ">
              <Button
                  variant="outlined"
                  className="red-btn-outline add-review"
                >
                <Icon className="fa fa-pencil" />  Write Review
                </Button>
              </div>
              
              <div>
                {this.state.reviews.map((review, index) => (
                  <div className="user-review" key={index}>
                    <div className="review-bottom">
                      <div style={{}} class="child_rev">
                      <img
                        className="user-image"
                        src={review.user_image}
                        alt=""
                        style={{float:'left',width:'70px',height:'70px'}}
                      />
                      <div className="username">{review.username}</div>
                      <div className="date">
                        {moment(review.date).format("DD MMMM, YYYY")}
                      </div>
                      </div>
                      <div className="review-title">{review.review_title}</div>
                      <div className="review-text">{review.review_text}</div>
                      </div>

                    <div className="review-top">
                      <div className="lagend">Overall Rating</div>
                      <div className="stars">
                        <StarRating size={36} value={review.rating} edit={false} />
                      {/* <fieldset style={{border: "1px solid #000"}}>
  <legend> YOUR TITLE </legend>
  <p>lorem ipsum</p>
  <StarRating value={review.rating} edit={false} />

</fieldset> */}
                      
                      </div>
                      {/* <div className="review-title">{review.review_title}</div> */}
                    </div>
                    {/* <div className="review-text">{review.review_text}</div> */}
                    
                  </div>
                ))}
              </div>
            </div>
            <div className="trending-wrapper">
              <Carousel
                data={this.state.similar}
                heading="Trending In Whey Protein"
                subheading="Lorem Ispum text"
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default connect(null, { addToCart })(ProductDetails);
