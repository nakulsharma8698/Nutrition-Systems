import React from "react";

import messages from "./../../utils/messages";

class DiscountOffer extends React.Component {
  render() {
    return (
      <div className="discount-offer">
        <p>{messages.common.offer}</p>
        <em className="fa fa-times" aria-hidden="true" />
      </div>
    );
  }
}

export default DiscountOffer;
