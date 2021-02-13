import React from "react";
import "./style.scss";
import Grid from "./Grid/";
import List from "./List";
import SideBar from "./sidebar";
import Slider from "./slider";
import messages from "./../../utils/messages";
import { GridIcon, ListIcon } from "../../Common/Icons";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getPopularBlogs } from "./../../actions/blogactions";
import Loader from "./../../Common/Loader";

class Blog extends React.Component {
  state = {
    view: "grid",
    menuopen: false
  };
  renderView() {
    if (this.state.view === "grid") {
      return <Grid data={this.props.data} history={this.props.history} />;
    } else {
      return <List data={this.props.data} history={this.props.history} />;
    }
  }
  render() {
    return (
      <div className="blog">
        <Slider />

        <div className="blog-wrapper">
          <div className="left-side">
            <SideBar />
          </div>
          <div className="right-side">
            <div className="sort-section">
              <div className="switch-view">
                {messages.common.views}:
                <div className="icons">
                  <GridIcon
                    strokeColor={this.state.view === "grid" ? "#dd121f" : null}
                    onClick={() => this.setState({ view: "grid" })}
                  />
                  <ListIcon
                    strokeColor={this.state.view === "list" ? "#dd121f" : null}
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
                  <SideBar />
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
                {this.props.data.length + " "}
                {messages.common.items}
              </div>
            </div>
            {!this.props.isLoading ? this.renderView() : <Loader />}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.blogs.blogs || [],
    isLoading: state.blogs.isLoading
  };
};
export default connect(mapStateToProps, { getPopularBlogs })(Blog);
