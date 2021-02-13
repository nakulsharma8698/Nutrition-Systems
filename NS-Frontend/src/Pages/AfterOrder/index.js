import React from "react";
import "./style.scss";
import messages from "../../utils/messages";
import Button from "@material-ui/core/Button";

export default class AfterOrder extends React.Component {
  success = {
    text: messages.common.order_success,
    imgSrc: "/images/happybuilder.png",
    buttonText: messages.common.continue_shopping
  };
  failure = {
    text: messages.common.order_failure,
    imgSrc: "/images/sadbuilder.png",
    buttonText: messages.common.retry
  };

  render() {
    const data = this.props.success ? this.success : this.failure;
    const mainText = this.props.success
      ? "Congratulations"
      : "Sorry";
    return (
      <div className="status-area">
        <div className="container">
          <div className="order-status-area">
            <span>{mainText}</span>
            <span>{data.text}</span>
            <div className="order-status-media">
              <img src={data.imgSrc} alt="happy builder" />
              <Button variant="contained" className="button-red" type="submit">
                {data.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
