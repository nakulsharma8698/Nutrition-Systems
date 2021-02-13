import React from "react";
import Slider from "react-slick";
import "./style.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Cookie from "js-cookie";
import { withRouter } from "react-router-dom";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: false,
  arrows: false
};
class Nutrition extends React.Component {
  toolAnswer = {};
  currentSlide = "age";
  mealPreferance = [3, 4, 5, 6, "any"];
  dietPreference = [
    "Ketogenic",
    "Paleo",
    "Veg",
    "Vegan",
    "Mediterranean",
    "Anything"
  ];
  targets = ["Loose Weight", "Gain Weight", "Build Muscle"];
  fats = ["Low Below 14%", "Medium 14%-26%", "High Above 26%"];
  activities = [
    "Sedentary",
    "Lightly active",
    "Moderately active",
    "Very active",
    "Extremely active"
  ];
  state = {
    isLogedIn: false
  };
  constructor(props) {
    super(props);
    const token = Cookie.get("token") ? Cookie.get("token") : null;
    if (token) {
      this.setState({ isLogedIn: true });
    }
  }
  getOtherSlides() {
    if (this.state.isLogedIn) {
    } else {
    }
  }
  onPrevClick(e) {
    if (this.toolAnswer[this.currentSlide]) {
      this.slider.slickPrev();
    }
  }
  onNextClick(e) {
    // const slide = document.querySelectorAll(".tool-slide")[this.currentSlide]
    //   .dataset.slide;

    if (this.toolAnswer[this.currentSlide]) {
      if (this.isLast) {
        console.log(this.toolAnswer);
        this.props.history.push({
          pathname: "/tool",
          state: { data: this.toolAnswer }
        });
      } else {
        this.slider.slickNext();
      }
    }
  }
  afterChangeHandler(e) {
    const slides = document.querySelectorAll(".tool-slide");
    const slide = slides[e].dataset.slide;
    this.isLast = slides.length - 1 === e;
    this.currentSlide = slide;
  }
  render() {
    const token = Cookie.get("token") ? Cookie.get("token") : null;
    return (
      <div className="tool-q-wrapper">
        <h1 className="page-title">I-Nutrition</h1>
        <div className="custom-slider-wrapper">
          <div onClick={() => this.onPrevClick()}>
            <i className="fa fa-chevron-left arrows"></i>
          </div>
          <div className="custom-slider-track">
            {token ? (
              <Slider
                ref={slider => (this.slider = slider)}
                afterChange={e => this.afterChangeHandler(e)}
                {...settings}
              >
                <div className="tool-slide" data-slide="age">
                  <div className="title">Age</div>
                  <div>
                    <TextField
                      classes={{ root: "login-input" }}
                      onChange={e => {
                        this.toolAnswer.age = e.target.value;
                      }}
                    />
                    <span className="sub-heading"> Years</span>
                  </div>
                </div>
                <div className="tool-slide" data-slide="gender">
                  <div className="title">Gender</div>
                  <div className="button-wrapper">
                    <Button
                      variant="contained"
                      className="button-red"
                      color="secondary"
                      onClick={e => {
                        this.toolAnswer.gender = "male";
                      }}
                    >
                      Male
                    </Button>
                    <Button
                      variant="contained"
                      className="button-red"
                      color="secondary"
                      onClick={e => {
                        this.toolAnswer.gender = "female";
                      }}
                    >
                      Female
                    </Button>
                  </div>
                </div>
                <div className="tool-slide" data-slide="name">
                  <div className="title">Name</div>
                  <div>
                    <TextField
                      classes={{ root: "login-input" }}
                      onChange={e => {
                        this.toolAnswer.name = e.target.value;
                      }}
                    />
                  </div>
                </div>
                <div className="tool-slide" data-slide="weight">
                  <div className="title">Weight</div>
                  <div>
                    <TextField
                      classes={{ root: "login-input" }}
                      onChange={e => {
                        this.toolAnswer.weight = e.target.value;
                      }}
                    />
                    <span className="sub-heading"> Kgs</span>
                  </div>
                </div>
                <div className="tool-slide" data-slide="height">
                  <div className="title">Height</div>
                  <div>
                    <TextField
                      classes={{ root: "login-input" }}
                      onChange={e => {
                        this.toolAnswer.height = e.target.value;
                      }}
                    />
                    <span className="sub-heading"> Cm</span>
                  </div>
                </div>
                <div className="tool-slide" data-slide="meals">
                  <div className="title">Meal Preferance</div>
                  <div className="button-wrapper">
                    {this.mealPreferance.map((item, index) => (
                      <Button
                        variant="contained"
                        className="button-red"
                        color="secondary"
                        key={index}
                        onClick={e => {
                          this.toolAnswer.meals = item;
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="tool-slide" data-slide="diet">
                  <div className="title">Diet Preferance</div>
                  <div className="button-wrapper">
                    {this.dietPreference.map((item, index) => (
                      <Button
                        variant="contained"
                        className="button-red"
                        color="secondary"
                        key={index}
                        onClick={e => {
                          this.toolAnswer.diet = item;
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="tool-slide" data-slide="goal">
                  <div className="title">Target</div>
                  <div className="button-wrapper">
                    {this.targets.map((item, index) => (
                      <Button
                        variant="contained"
                        className="button-red"
                        color="secondary"
                        key={index}
                        onClick={e => {
                          this.toolAnswer.goal = item;
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="tool-slide" data-slide="bodyfat">
                  <div className="title">Body Fat Percentage</div>
                  <div className="button-wrapper">
                    {this.fats.map((item, index) => (
                      <Button
                        variant="contained"
                        className="button-red"
                        color="secondary"
                        key={index}
                        onClick={e => {
                          this.toolAnswer.bodyfat = item;
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="tool-slide" data-slide="lifestyle">
                  <div className="title"> Activity Level</div>
                  <div className="button-wrapper">
                    {this.activities.map((item, index) => (
                      <Button
                        variant="contained"
                        className="button-red"
                        color="secondary"
                        key={index}
                        onClick={e => {
                          this.toolAnswer.lifestyle = item;
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="tool-slide" data-slide="goal_weight">
                  <div className="title">Weight Goal</div>
                  <div>
                    <TextField
                      classes={{ root: "login-input" }}
                      onChange={e => {
                        this.toolAnswer.goal_weight = e.target.value;
                      }}
                    />
                    <span className="sub-heading">Kgs</span>
                  </div>
                </div>
                <div className="tool-slide" data-slide="losegain">
                  <div className="title">Weight Gain/Loss rate per week</div>
                  <div>
                    <TextField
                      classes={{ root: "login-input" }}
                      onChange={e => {
                        this.toolAnswer.losegain = e.target.value;
                      }}
                    />
                    <span className="sub-heading">Kgs</span>
                  </div>
                </div>
              </Slider>
            ) : (
              <Slider
                {...settings}
                ref={slider => (this.slider = slider)}
                afterChange={e => this.afterChangeHandler(e)}
              >
                <div className="tool-slide" data-slide="age">
                  <div className="title">Age</div>
                  <div>
                    <TextField
                      classes={{ root: "login-input" }}
                      onChange={e => {
                        this.toolAnswer.age = e.target.value;
                      }}
                    />
                    <span className="sub-heading"> Years</span>
                  </div>
                </div>
                <div className="tool-slide" data-slide="gender">
                  <div className="title">Gender</div>
                  <div className="button-wrapper">
                    <Button
                      variant="contained"
                      className="button-red"
                      color="secondary"
                      onClick={e => {
                        this.toolAnswer.gender = "male";
                      }}
                    >
                      Male
                    </Button>
                    <Button
                      variant="contained"
                      className="button-red"
                      color="secondary"
                      onClick={e => {
                        this.toolAnswer.gender = "female";
                      }}
                    >
                      Female
                    </Button>
                  </div>
                </div>
                <div className="tool-slide" data-slide="name">
                  <div className="title">Name</div>
                  <div>
                    <TextField
                      classes={{ root: "login-input" }}
                      onChange={e => {
                        this.toolAnswer.name = e.target.value;
                      }}
                    />
                  </div>
                </div>
                <div className="tool-slide" data-slide="weight">
                  <div className="title">Weight</div>
                  <div>
                    <TextField
                      classes={{ root: "login-input" }}
                      onChange={e => {
                        this.toolAnswer.weight = e.target.value;
                      }}
                    />
                    <span className="sub-heading"> Kgs</span>
                  </div>
                </div>
                <div className="tool-slide" data-slide="height">
                  <div className="title">Height</div>
                  <div>
                    <TextField
                      classes={{ root: "login-input" }}
                      onChange={e => {
                        this.toolAnswer.height = e.target.value;
                      }}
                    />
                    <span className="sub-heading"> Cm</span>
                  </div>
                </div>
                <div className="tool-slide" data-slide="diet">
                  <div className="title">Diet Preferance</div>
                  <div className="button-wrapper">
                    {this.dietPreference.map((item, index) => (
                      <Button
                        variant="contained"
                        className="button-red"
                        color="secondary"
                        key={index}
                        onClick={e => {
                          this.toolAnswer.diet = item;
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="tool-slide" data-slide="goal">
                  <div className="title">Target</div>
                  <div className="button-wrapper">
                    {this.targets.map((item, index) => (
                      <Button
                        variant="contained"
                        className="button-red"
                        color="secondary"
                        key={index}
                        onClick={e => {
                          this.toolAnswer.goal = item;
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
              </Slider>
            )}
          </div>
          <div
            onClick={() => this.onNextClick()}
            // className={this.toolAnswer[this.currentSlide] ? "" : "disabled"}
          >
            <i className="fa fa-chevron-right arrows"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Nutrition);
