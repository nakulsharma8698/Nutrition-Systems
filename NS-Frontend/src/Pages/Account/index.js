import React from "react";
import "./style.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Details from "./Details";
import Address from "./Address";
import Orders from "./Orders";
import CashbackHistory from "./cashbackHistory";
import Referrals from "./Referrals";
import Coupons from "./Coupon";
import Wishlist from "./wishlist";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Cookie from "js-cookie";

class Account extends React.Component {
  state = {
    activeRoute: {},
    menuopen: false
  };
  menu = [
    {
      text: "Dashboard",
      iconClass: "icon-home-black",
      url: "/"
    },
    {
      text: "Orders",
      iconClass: "icon-orders-black",
      url: "/account/orders"
    },
    {
      text: "Address",
      iconClass: "icon-address-black",
      url: "/account/address"
    },
    {
      text: "Account Details",
      iconClass: "icon-account-details-black",
      url: "/account/account-details"
    },
    {
      text: "Cashback History",
      iconClass: "icon-cashback-history-black",
      url: "/account/cashback-history"
    },
    {
      text: "Referrals",
      iconClass: "icon-referrals-black",
      url: "/account/referrals"
    },
    {
      text: "Coupons",
      iconClass: "icon-coupons-black",
      url: "/account/coupons"
    },
    {
      text: "Wishlist",
      iconClass: "icon icon-heart",
      url: "/account/wishlist"
    }
  ];

  menuClick(item) {
    this.props.history.push(item.url);
  }
  logout() {
    localStorage.removeItem("token");

    this.props.history.push("/");
    window.location.reload();
  }
  render() {
    const currentRoute = this.props.location.pathname;
    let selectedRoute = this.menu.filter(item => item.url === currentRoute);
    if (selectedRoute.length) {
      selectedRoute = selectedRoute[0];
    } else {
      selectedRoute = {};
    }
    return (
      <div className="account-page-wrapper">
        <div className="mobile-menu">
          <SwipeableDrawer
            anchor="right"
            open={this.state.menuopen}
            onClose={() => this.setState({ menuopen: false })}
            onOpen={() => this.setState({ menuopen: true })}
          >
            <div className="left-side">
              {this.menu.map((item, index) => (
                <div
                  className={
                    item.text === selectedRoute.text ? "menu active" : "menu"
                  }
                  key={index}
                  onClick={() => this.menuClick(item)}
                >
                  <span>{item.text}</span>
                </div>
              ))}
              <div className="logout menu" onClick={() => this.logout()}>
                <span>Logout</span>
              </div>
            </div>
          </SwipeableDrawer>
          <Button
            className="account-menu"
            onClick={() => {
              this.setState({ menuopen: true });
            }}
          >
            Account Menu
          </Button>
        </div>
        <div className="page-title">{selectedRoute.text}</div>
        <div className="account-page">
          <div className="left-side">
            {this.menu.map((item, index) => (
              <div
                className={
                  item.text === selectedRoute.text ? "menu active" : "menu"
                }
                key={index}
                onClick={() => this.menuClick(item)}
              >
                <em className={item.iconClass} />
                <span>{item.text}</span>
              </div>
            ))}
            <div className="menu logout" onClick={() => this.logout()}>
              <em className="icon icon-logout-white" />

              <span>Logout</span>
            </div>
          </div>

          <div className="right-side">
            <Switch>
              <Route path="/account/orders" component={Orders} />
              <Route path="/account/address" component={Address} />
              <Route path="/account/account-details" component={Details} />
              <Route
                path="/account/cashback-history"
                component={CashbackHistory}
              />
              <Route path="/account/referrals" component={Referrals} />
              <Route path="/account/coupons" component={Coupons} />
              <Route path="/account/wishlist" component={Wishlist} />
              <Route exact path="/account">
                {<Redirect to="/account/account-details" />}
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Account);
