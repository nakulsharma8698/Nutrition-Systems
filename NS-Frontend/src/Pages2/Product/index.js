import React from "react";
import "./style.scss";
import ProductGrid from "../ProductGrid";
import ProductList from "../ProductList";
import Filter from "./filter";
import Slider from "./slider";
import Select from "react-select";
import messages from "./../../utils/messages";
import { API } from "../../axios";
import { apis } from "../../constants";
import { GridIcon, ListIcon } from "../../Common/Icons";
import Loader from "./../../Common/Loader";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import queryString from "query-string";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "rgb(51, 51, 51)",
    backgroundColor: state.isSelected ? "red" : "",
    ":active": {
      backgroundColor: ""
    }
  }),
  control: base => ({
    ...base,
    border: "1px solid rgb(204, 204, 204)",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid rgb(204, 204, 204)"
    }
  })
};
export default class Product extends React.Component {
  state = {
    view: "grid",
    data: [],
    isLoaded: false
  };
  sortOptions = [
    { value: "rating", label: "Rating" },
    { value: "popularity", label: "Popularity" },
    { value: "pricel", label: "Price" },
    { value: "priceh", label: "Price (Desc)" },
    { value: "discountl", label: "Discount" },
    { value: "discounth", label: "Discount (Desc)" }
  ];
  sortingBy = this.sortOptions[0];
  searchText = "";
  componentDidMount() {
    let params = queryString.parse(this.props.location.search);
    this.searchText = params.search;
    this.getProducts();
  }
  componentDidUpdate(prevProps) {
    let params = queryString.parse(this.props.location.search);
    if (this.searchText !== params.search) {
      this.searchText = params.search;
      this.getProducts();
    }
  }
  getProducts = async filter => {
    const sort = this.sortingBy.value;
    this.setState({ isLoaded: false });
    const search = this.searchText ? this.searchText : undefined;
    const response = await API.POST(apis.allProducts, {
      ...filter,
      sort: sort,
      search: search
    });

    if (response.success) {
      this.setState({ data: response.data, isLoaded: true });
    }
  };
  renderView() {
    if (this.state.view === "grid") {
      return <ProductGrid data={this.state.data} history={this.props.history}/>;
    } else {
      return (
        <ProductList data={this.state.data} history={this.props.history} />
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <Slider />

        <div className="product-wrapper">
          <div className="left-side">
            <Filter onChange={filter => this.getProducts(filter)} />
          </div>
          <div className="right-side">
            <React.Fragment>
              <div className="sort-section">
                <div className="sort-by-wrapper">
                  {messages.common.sort_by}:
                  <Select
                    styles={customStyles}
                    className="sort-dd"
                    options={this.sortOptions}
                    defaultValue={this.sortOptions[0]}
                    onChange={e => {
                      this.sortingBy = e;
                      this.getProducts();
                    }}
                  /> 
                </div>
                <div className="switch-view">
                  {messages.common.views}:
                  <div className="icons">
                    <GridIcon
                      strokeColor={
                        this.state.view === "grid" ? "#dd121f" : null
                      }
                      onClick={() => this.setState({ view: "grid" })}
                    />
                    <ListIcon
                      strokeColor={
                        this.state.view === "list" ? "#dd121f" : null
                      }
                      onClick={() => this.setState({ view: "list" })}
                    />
                  </div>
                </div>
                <div className="mobile-menu">
                  <SwipeableDrawer
                    anchor="right"
                    open={this.state.menuopen}
                    onClose={() => this.setState({ menuopen: false })}
                    onOpen={() => this.setState({ menuopen: true })}
                  >
                    <Filter />
                  </SwipeableDrawer>
                  <Button
                    className="filter"
                    onClick={() => {
                      this.setState({ menuopen: true });
                    }}
                  >
                    Filter
                  </Button>
                </div>

                <div className="items-count">
                  {this.state.data.length + " "}
                  {messages.common.items}
                </div>
              </div>
              {this.state.isLoaded ? this.renderView() : <Loader />}
            </React.Fragment>
          </div>



        </div>
      </React.Fragment>
    );
  }
}
