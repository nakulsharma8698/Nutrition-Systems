import React from "react";
import ProductItem from "./ProductItem";
import "./style.scss";
export default class ProductGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="product-grid-area">
          {this.props.data.map((item, index) => {
            return (
              <ProductItem
                data={item}
                key={index}
                history={this.props.history}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
