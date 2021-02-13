import React from "react";
import Item from "./item";
import "./style.scss";
export default class Grid extends React.Component {
  render() {
    return (
      <div className="blog-grid-area">
        {this.props.data.map((item, index) => {
          return <Item data={item} key={index} history={this.props.history} />;
        })}
      </div>
    );
  }
}
