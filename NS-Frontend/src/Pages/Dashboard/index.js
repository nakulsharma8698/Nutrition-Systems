import React from "react";
import "./style.scss";
import Carousel from "./mainSlider";
import { API } from "./../../axios";
import { apis } from "./../../constants";
import ProductCarousel from "./../../Common/TrendingCarousel";
import InstaPosts from "./../../Common/InstaPosts";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Slider from "react-slick";
import BlogSlider from "./BlogSlider";
import Testimonial from "./Testimonial";
import Goal from "./Goal";
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 624,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
};
var infosettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000
};
class Dashboard extends React.Component {
  state = {
    topseller: [],
    deals: [],
    isToolDisabled: true
  };
  toolAnswers = {
    height: null,
    weight: null,
    age: null,
    goal: null,
    lifestyle: null,
    workout: null,
    diet: "veg"
  };
  goalOptions = [
    {
      icon: "icon-belly",
      option: "Weight Loss",
      subtext: "I want to lose Weight",
      question: "goal"
    },
    {
      icon: "icon-gym",
      option: "Body Building",
      subtext: "I want to build muscle mass",
      question: "goal"
    },
    {
      icon: "icon-weightlift",
      option: "General Fitness",
      subtext: "I want general fitness",
      question: "goal"
    },
    {
      icon: "icon-fast",
      option: "Sports",
      subtext: "I want to play sports",
      question: "goal"
    }
  ];
  activeOptions = [
    {
      icon: "icon-couch",
      option: "Sedentary",
      subtext: "Inactive",
      question: "lifestyle"
    },
    {
      icon: "icon-walk",
      option: "Lightly Active",
      subtext: "Minimal",
      question: "lifestyle"
    },
    {
      icon: "icon-workout",
      option: "Moderately Active",
      subtext: "15-30 mins workout",
      question: "lifestyle"
    },
    {
      icon: "icon-fast",
      option: "Very Active",
      subtext: "Regular Workout",
      question: "lifestyle"
    }
  ];
  workoutoptions = [
    {
      icon: "icon-gym-1",
      option: "Yes",
      subtext: "",
      question: "workout"
    },
    {
      icon: "icon-walk",
      option: "No",
      subtext: "",
      question: "workout"
    },
    {
      icon: "icon-gym-2",
      option: "Sometimes",
      subtext: "",
      question: "workout"
    }
  ];
  mainInfo = [
    {
      text: "NEXT DISPATCH IN 1H 20MIn 09SEC",
      icon: "/images/next-dispatch.svg"
    },
    {
      text: "9.4/ 10 ON TRUSTPILOT",
      icon: "/images/trust.svg"
    },
    {
      text: "FINEST QUALITY",
      icon: "/images/quality.svg"
    },
    {
      text: "FREE COACHING",
      icon: "/images/coaching.svg"
    },
    {
      text: "FREE SHIPPING FROM $40",
      icon: "/images/truck.svg"
    }
  ];
  async componentDidMount() {
    this.getTodaysDeals();
    this.getTrending();
  }
  async getTrending() {
    const response = await API.POST(apis.topseller);
    if (response.success) {
      this.setState({ topseller: response.data });
    }
  }
  async getTodaysDeals() {
    const date = new Date().toISOString();
    const response = await API.POST(apis.deals, { date: date });
    if (response.success) {
      this.setState({ deals: response.data.items });
    }
  }
  onAnswerChange(answer, question) {
    this.toolAnswers[question] = answer;
    for (var key in this.toolAnswers) {
      if (!this.toolAnswers[key]) {
        this.setState({ isToolDisabled: true });
        return false;
      }
    }
    this.setState({ isToolDisabled: false });
  }
  renderMainSlider() {
    return (
      <div className="main-slider">
        <Carousel />
        <div className="main-info-wrapper">
          <div className="center">
            {this.mainInfo.map((item, index) => {
              return (
                <div
                  className={
                    index === this.mainInfo.length - 1 ? "info last" : "info"
                  }
                  key={index}
                >
                  <div>
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="text">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mobile-info-wrapper">
          <Slider {...infosettings}>
            {this.mainInfo.map((item, index) => (
              <div
                className={
                  index === this.mainInfo.length - 1
                    ? "info last"
                    : index === 0
                    ? "first info"
                    : "info"
                }
                key={index}
              >
                <div>
                  <img src={item.icon} alt="" />
                </div>
                <div className="text">{item.text}</div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
  renderProductCarousel(
    heading,
    subheading,
    items,
    className,
    showRibbon = false,
    showtimer = false
  ) {
    return (
      <ProductCarousel
        heading={heading}
        subheading={subheading}
        data={items}
        className={className}
        showRibbon={showRibbon}
        showtimer={showtimer}
      />
    );
  }
  renderOption({ option, subtext, question, icon }, index) {
    const active = this.toolAnswers[question] === option;
    return (
      <div
        className={active ? "option active" : "option"}
        onClick={event => this.onAnswerChange(option, question)}
        key={index}
      >
        <div className="icon-wrapper">
          <em className={`icon ${icon}`} />
        </div>
        <div>
          <div>{option}</div>
          <div className="sub-info">{subtext}</div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="dashboard-wrapper">
        {this.renderMainSlider()}
        <div className="dashboard-container">
          {this.state.deals.length &&
            this.renderProductCarousel(
              "Today Deals",
              "Lorem Ispum text",
              this.state.deals,
              "todays-deals",
              true,
              true
            )}
          <Goal />
         {/* <div className="tools-section">
            <div className="heading">I-NUTRITION</div>
            <div className="questioniare">
              <Slider {...settings}>
                <div className="q-section first">
                  <div className="title">Title</div>
                  <div className="wrapper">
                    <div className="option">
                      <div className="icon-wrapper">
                        <em className="icon icon-height" />
                      </div>
                      <div>
                        <div>What is your height?</div>
                        <div className="input-section">
                          <TextField
                            classes={{ root: "login-input" }}
                            onChange={event =>
                              this.onAnswerChange(event.target.value, "height")
                            }
                          />
                          cm
                        </div>
                      </div>
                    </div>
                    <div className="option">
                      <div className="icon-wrapper">
                        <em className="icon icon-weight" />
                      </div>
                      <div>
                        <div>What is your weight?</div>
                        <div className="input-section">
                          <TextField
                            classes={{ root: "login-input" }}
                            onChange={event =>
                              this.onAnswerChange(event.target.value, "weight")
                            }
                          />
                          kg
                        </div>
                      </div>
                    </div>
                    <div className="option">
                      <div className="icon-wrapper">
                        <em className="icon icon-age" />
                      </div>
                      <div>
                        <div>What is your Age?</div>
                        <div className="input-section">
                          <TextField
                            classes={{ root: "login-input" }}
                            onChange={event =>
                              this.onAnswerChange(event.target.value, "age")
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="q-section">
                  <div className="title">Title</div>
                  <div className="wrapper">
                    <div className="question">What is your Goal?</div>
                    {this.goalOptions.map((item, index) =>
                      this.renderOption(item, index)
                    )}
                  </div>
                </div>
                <div className="q-section">
                  <div className="title">Title</div>
                  <div className="wrapper">
                    <div className="question">How active are you?</div>
                    {this.activeOptions.map((item, index) =>
                      this.renderOption(item, index)
                    )}
                  </div>
                </div>
                <div className="q-section last">
                  <div className="title">Title</div>
                  <div className="wrapper">
                    <div className="question">Do you workout?</div>
                    {this.workoutoptions.map((item, index) =>
                      this.renderOption(item, index)
                    )}
                  </div>
                </div>
              </Slider>
            </div>
            <div className="bottom-section">
              Veg
              <Switch
                onChange={e => {
                  const answer = e.target.checked ? "Non veg" : "veg";
                  this.onAnswerChange(answer, "diet");
                }}
              />
              Non-Veg
              <Button
                variant="contained"
                className="button-red"
                disabled={this.state.isToolDisabled}
                onClick={() =>
                  this.props.history.push({
                    pathname: "/tool",
                    state: { data: this.toolAnswers }
                  })
                }
              >
                Next
              </Button>
            </div>
          </div> */}
          {this.state.topseller &&
            this.renderProductCarousel(
              "Popular In Weight Loss",
              "Lorem Ispum text",
              this.state.topseller
            )}
          {this.state.topseller &&
            this.renderProductCarousel(
              "Trending In Whey Protein",
              "Lorem Ispum text",
              this.state.topseller
            )}
          {this.state.topseller &&
            this.renderProductCarousel(
              "Trending In Mass Gainer",
              "Lorem Ispum text",
              this.state.topseller
            )}
          <BlogSlider />

          <InstaPosts />
          <Testimonial />
          <div className="bottom-icons">
            <img src="/images/website-icons-last-4.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
