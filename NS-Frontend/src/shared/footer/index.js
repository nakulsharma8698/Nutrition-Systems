import React from "react";

import messages from "./../../utils/messages";
import "./style.scss";
import footerBottomImg from "./../../images/footer-bottom.jpg";
// import paymentOpt1 from "./../../images/payment-opt1.jpg";
// import paymentOpt2 from "./../../images/payment-opt2.jpg";
// import paymentOpt3 from "./../../images/payment-opt3.jpg";
// import paymentOpt4 from "./../../images/payment-opt4.jpg";
// import paymentOpt5 from "./../../images/payment-opt5.jpg";
const quickLinks = [
  {
    title: "Nutrition Systems",
    links: [
      {
        name: "About Us",
        path: "#"
      },
      {
        name: "Refer & Earn",
        path: "#"
      },
      {
        name: "Carrers",
        path: "#"
      },
      {
        name: "Terms & Conditions",
        path: "#"
      },
      {
        name: "Privacy Policy",
        path: "#"
      }
    ]
  },
  {
    title: "Support",
    links: [
      {
        name: "Your Account",
        path: "#"
      },
      {
        name: "Store Locator",
        path: "#"
      },
      {
        name: "Delivery Policy",
        path: "#"
      },
      {
        name: "Return Policy",
        path: "#"
      },
      {
        name: "FAQ & Help",
        path: "#"
      },
      {
        name: "Contact US",
        path: "#"
      },
      {
        name: "Sell on Nutritions",
        path: "#"
      }
    ]
  },
  {
    title: "Categories",
    links: [
      {
        name: "Body Building",
        path: "#"
      },
      {
        name: "Weight Loss",
        path: "#"
      },
      {
        name: "Health Living",
        path: "#"
      },
      {
        name: "Hair, Skin & Care",
        path: "#"
      },
      {
        name: "Sports Nutritions",
        path: "#"
      }
    ]
  },
  {
    title: "Optional",
    links: [
      {
        name: "Lorem Ipsum",
        path: "#"
      },
      {
        name: "Lorem Ipsum",
        path: "#"
      },
      {
        name: "Lorem Ipsum",
        path: "#"
      },
      {
        name: "Lorem Ipsum",
        path: "#"
      }
    ]
  }
];
export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.fooMedia = React.createRef();
    this.fooImg = React.createRef();
  }

  paymentOptions = [
    // {
    //   type: "Visa",
    //   img: paymentOpt1
    // },
    // {
    //   type: "Master Card",
    //   img: paymentOpt2
    // }
    // {
    //   type: "Cirrus",
    //   img: paymentOpt3
    // },
    // {
    //   type: "Discover",
    //   img: paymentOpt4
    // },
    // {
    //   type: "Paypal",
    //   img: paymentOpt5
    // }
  ];

  componentDidMount() {
    this.footerImage();
  }

  footerImage = () => {
    const imgUrl = this.fooImg.current.src;

    this.fooMedia.current.style.background =
      "transparent url(" + imgUrl + ") no-repeat center center";
    this.fooMedia.current.style.backgroundSize = "cover";
    this.fooMedia.current.style["-webkit-background-size"] = "cover";
    this.fooMedia.current.style["-moz-background-size"] = "cover";
    this.fooMedia.current.style["-ms-background-size"] = "cover";
    this.fooMedia.current.style["-o-background-size"] = "cover";
    this.fooMedia.current.style.minHeight = 24 + "px";
    this.fooImg.current.style.display = "none";
  };

  render() {
    return (
      <footer className="footer">
        <div className="inner-footer">
          <div className="footer-newsletter">
            <div className="fn-media" ref={this.fooMedia}>
              <img
                src={footerBottomImg}
                alt="newsletter-bg"
                ref={this.fooImg}
              />
            </div>
          </div>
          <div className="footer-main">
            <div className="container">
              <div className="footer-nav">
                <div className="row">
                  <div className="col-lg-7 col-md-6">
                    <div className="footer-quick-links">
                      <div className="row">
                        {quickLinks.map((item, index) => (
                          <div
                            className="col-lg-3 col-md-6 col-sm-6"
                            key={index}
                          >
                            <div className="fql-box">
                              <h5>{item.title}</h5>
                              {item.links && (
                                <ul>
                                  {item.links.map((item, index) => (
                                    <li key={index}>
                                      <a href={item.path}>{item.name}</a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="footer-subscription">
                      <h5>{messages.common.signup_newsletter}</h5>
                      <form onSubmit={this.newsletterSignUp}>
                        <div className="fn-subscribe">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={messages.common.enter_email}
                          />
                          <button type="submit" className="btn btn-send">
                            {messages.common.send}
                          </button>
                        </div>
                      </form>
                      <div className="coupen-info">
                        <h5>{messages.common.coupen_code}</h5>
                        <p>{messages.common.dummy_text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
               
                <div className="cc-payment">
                  {this.paymentOptions.map((option, index) => (
                    <span key={index}>
                      <img src={option.img} alt={option.type} />
                    </span>
                  ))}
                </div>
                <div className="cc-social">
                  <em className="fa fa-facebook"></em>
                  <em className="fa fa-linkedin"></em>
                  <em className="fa fa-google-plus"></em>
                  <em className="fa fa-twitter"></em>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <span>Disclaimer: </span> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Quisque eu nibh ac arcu porttitor consectetur et sit
            amet nisi. Phasellussed justo vel nulla vestibulum dapibus.
            Curabitur consequat lacus risus, ac tempus metus porttitor a.
            Quisquelobortis faucibus mauris, et consequat eros vehicula a.
            Quisque hendrerit pharetra augue sed fermentum. Orci varius
            natoquepenatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Curabitur quis tellus interdum, rutrum mi id, consectetur est.
            <div className="cc-text">@ Copyright 2019 . All Right Reserved</div>
          </div>
        </div>
      </footer>
    );
  }
}
