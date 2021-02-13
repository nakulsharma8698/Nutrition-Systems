import React from "react";
import ProductItem from "./item";
export default class ProductList extends React.Component {
  render() {
    return (
      <div className="product-list-wrapper">
        {this.props.data.map((item, index) => {
          return (
            <ProductItem data={item} key={index} history={this.props.history} />
          );
        })}
      </div>
    );
  }
}
