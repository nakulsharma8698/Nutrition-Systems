import React from "react";
import "./style.scss";
class Referrals extends React.Component {
  render() {
    return (
      <div className="referrals-wrapper">
        <img src="/images/referral_banner.jpg" alt="referral banner" />
        <div>
          <div className="content-wrapper">
            <div className="title">Your Referrals</div>
            <div>You dont have any referrals yet.</div>
          </div>
          <div className="content-wrapper">
            <div className="title">How to get Referrals</div>
            <div className="heading">1. Give them your code.</div>
            <input type="text" readOnly value="44205854" />
            <div className="helptext">
              Referrals should enter the code ar checkout or signup
            </div>
            <div className="heading">2. Send them your link</div>
            <input
              type="text"
              readOnly
              value="https://linktoourpagewithReferral.com"
            />
            <div className="helptext">
              Referals that access this URL are connected as referrals once they
              signup or place an order.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Referrals;
