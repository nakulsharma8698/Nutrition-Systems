import React from "react";
import Accordian from "./../../Common/Accordian";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import "./style.scss";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import { API } from "../../axios";
import { apis } from "../../constants";

const MySlider = withStyles({
  root: {
    color: "#DD121F"
  }
})(Slider);

export default class Filter extends React.Component {
  state = {
    category: [],
    flavor: [],
    weights: [],
    goals: [],
    brand: [],
    price: null
  };
  filter = {
    category: [],
    flavor: [],
    weights: [],
    goals: [],
    brand_id: [],
    price: []
  };
  async getCategories() {
    const response = await API.POST(apis.blogCategory, {
      type: "products"
    });
    if (response.success) {
      this.setState({
        flavor: response.data.flavor,
        goals: response.data.goals,
        brand: response.data.brand,
        category: response.data.cate,
        weights: response.data.weights,
        price: response.data.prices
      });
    }
  }
  componentDidMount() {
    this.getCategories();
  }
  onFilterChange(checked, label, type) {
    if (checked) {
      this.filter[type].push(label);
    } else {
      var index = this.filter[type].indexOf(label);
      if (index > -1) {
        this.filter[type].splice(index, 1);
      }
    }
    const filterStr = {};
    for (var item in this.filter) {
      if (this.filter[item].length) {
        filterStr[item] = this.filter[item].toString();
      }
    }
    this.props.onChange(filterStr);
  }
  renderCheckbox(label, key, type) {
    let value = label;
    if (type === "brand_id") {
      value = label[1];
      label = label[0];
    }

    return (
      <FormControlLabel
        key={key}
        classes={{
          root: "filter-checkbox-wrapper",
          label: "filter-checkbox-label"
        }}
        control={
          <Checkbox
            className="filter-checkbox checkbox-red"
            onChange={e => this.onFilterChange(e.target.checked, value, type)}
          />
        }
        label={label}
      />
    );
  }
  renderPriceCheckbox(label, key, type) {
    const min = key === 0 ? 0 : this.state.price[key - 1];
    return (
      <FormControlLabel
        key={key}
        classes={{
          root: "filter-checkbox-wrapper",
          label: "filter-checkbox-label"
        }}
        control={
          <Checkbox
            className="filter-checkbox checkbox-red"
            onChange={e =>
              this.onFilterChange(e.target.checked, min + "," + label, type)
            }
          />
        }
        label={min + " - " + label}
      />
    );
  }
  handleSliderChange(e) {
    this.filter.price = e;
    const filterStr = {};
    for (var item in this.filter) {
      if (this.filter[item].length) {
        filterStr[item] = this.filter[item].toString();
      }
    }
    this.props.onChange(filterStr);
  }
  render() {
    return (
      <div className="filter-wrapper">
        <Accordian title="Category">
          {this.state.category.map((option, index) =>
            this.renderCheckbox(option, index, "category")
          )}
        </Accordian>
        <Accordian title="Flavour">
          {this.state.flavor.map((option, index) =>
            this.renderCheckbox(option, index, "flavor")
          )}
        </Accordian>
        <Accordian title="Size">
          {this.state.weights.map((option, index) =>
            this.renderCheckbox(option, index, "weights")
          )}
        </Accordian>
        <Accordian title="Goals">
          {this.state.goals.map((option, index) =>
            this.renderCheckbox(option, index, "goals")
          )}
        </Accordian>
        <Accordian title="Brands">
          {this.state.brand.map((option, index) =>
            this.renderCheckbox(option, index, "brand_id")
          )}
        </Accordian>
        <Accordian title="Price">
          {this.state.price && (
            <MySlider
              valueLabelDisplay="auto"
              defaultValue={this.state.price}
              onChangeCommitted={(e, val) => this.handleSliderChange(val)}
              max={
                this.state.price[0] > this.state.price[1]
                  ? this.state.price[0]
                  : this.state.price[1]
              }
              min={
                this.state.price[0] < this.state.price[1]
                  ? this.state.price[0]
                  : this.state.price[1]
              }
            />
          )}
          {/* {this.state.price.map((option, index) =>
                           this.renderPriceCheckbox(option, index, "price")
                         )} */}
        </Accordian>
      </div>
    );
  }
}
