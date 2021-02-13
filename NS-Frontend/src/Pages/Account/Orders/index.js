import React from "react";
import "./styles.scss";
import { API } from "./../../../axios";
import { apis } from "./../../../constants";
import Button from "@material-ui/core/Button";

class Orders extends React.Component {
  state = {
    orders: [
      {
        date: "Ordered on DD/MM/YY",
        imageSrc: "/images/Rectangle68@2x.png",
        title: "MuscleBlaze Whey Gold Protein 4 lb Rich Milk Chocolate",
        price: "3999"
      },
      {
        date: "Delivered on DD/MM/YY",
        imageSrc: "/images/Rectangle68@2x.png",
        title: "MuscleBlaze Whey Gold Protein 4 lb Rich Milk Chocolate",
        price: "3999"
      },
      {
        date: "Delivered on DD/MM/YY",
        imageSrc: "/images/Rectangle68@2x.png",
        title: "MuscleBlaze Whey Gold Protein 4 lb Rich Milk Chocolate",
        price: "3999"
      }
    ]
  };
  async componentDidMount() {
    const response = await API.POST(apis.orders);
    if (response.success) {
      //this.setState({ orders: response.data });
    }
  }
  render() {
    return (
      <div className="order-history">
        <div>
          {this.state.orders.map((item, index) => (
            <div className="order-history-item" key={index}>
              <div>
                <img src="/images/tick@2x.png" className="tick" alt="" />
                <span className="date">{item.date}</span>
                <div className="product-info">
                  <img src={item.imageSrc} alt="" />
                  <div className="title-wrapper">
                    <div className="title">{item.title}</div>
                    <div className="price">
                      <span>&#8377;</span>
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons-wrapper">
                <Button
                  variant="outlined"
                  className="red-btn-outline"
                  color="secondary"
                >
                  Track Package
                </Button>
                <Button
                  variant="outlined"
                  className="red-btn-outline"
                  color="secondary"
                >
                  Write a Review
                </Button>
                <Button
                  variant="outlined"
                  className="red-btn-outline"
                  color="secondary"
                >
                  Buy Again
                </Button>
                <Button
                  variant="outlined"
                  className="red-btn-outline"
                  color="secondary"
                >
                  Help
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Orders;
