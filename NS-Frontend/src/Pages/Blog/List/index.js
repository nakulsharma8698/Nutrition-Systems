import React from "react";
import "./style.scss";
import Item from "./item";
export default class List extends React.Component {
  render() {
    return (
      <div className="blog-list-area">
        {this.props.data.map((item, index) => {
          return <Item data={item} key={index} history={this.props.history} />;
        })}
      </div>
    );
  }
}
