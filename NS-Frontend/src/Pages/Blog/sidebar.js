import React from "react";
import { Link } from "react-router-dom";
import Accordian from "./../../Common/Accordian";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import "./style.scss";
import { API } from "../../axios";
import { apis } from "../../constants";
import { getPopularBlogs, getBlogs } from "./../../actions/blogactions";
import { connect } from "react-redux";
import moment from "moment";

class Sidebar extends React.Component {
  state = {
    category: []
  };
  selectedCategories = [];

  async componentDidMount() {
    this.getCategories();
    this.props.getBlogs(null);
    if (!this.props.bloglist) {
      this.props.getPopularBlogs();
    }
  }
  async getCategories() {
    const response = await API.POST(apis.blogCategory, { type: "blog" });
    if (response.success) {
      this.setState({ category: response.data.category });
    }
  }
  setSelectedCategory(checked, label) {
    if (checked) {
      this.selectedCategories.push(label);
    } else {
      var index = this.selectedCategories.indexOf(label);
      if (index > -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
    this.props.getBlogs(this.selectedCategories.toString());
  }
  renderCheckbox(label, key) {
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
            onChange={e => this.setSelectedCategory(e.target.checked, label)}
          />
        }
        label={label}
      />
    );
  }
  renderMostOption(option, key) {
    return (
      <Link to={"/blogdetail/" + option.blog_id} key={option.blog_id}>
        <div className="most-visited-wrapper">
          <div className="title">{option.title}</div>
          <div className="date">
            {moment(option.publish_date).format("DD/MM/YYY")}
          </div>
        </div>
      </Link>
    );
  }
  render() {
    return (
      <div>
        <Accordian title="Category">
          {this.state.category.map((option, index) =>
            this.renderCheckbox(option, index)
          )}
        </Accordian>
        {this.props.bloglist && (
          <Accordian title="Most Visited">
            {this.props.bloglist.map((option, index) =>
              this.renderMostOption(option, index)
            )}
          </Accordian>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    bloglist: state.blogs.popular_blogs
  };
};
export default connect(mapStateToProps, { getPopularBlogs, getBlogs })(Sidebar);
