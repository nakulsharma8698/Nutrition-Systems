import "./App.scss";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";
import Product from "./Pages/Product";
import Prod from "./Pages/Product/prod";
import AfterOrder from "./Pages/AfterOrder";
import Header from "./shared/header";
import Footer from "./shared/footer";
import DiscountOffer from "./shared/DiscountOffer";
import LoginSignUp from "./Pages/LoginSignUp";
import OTP from "./Pages/LoginSignUp/otp";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Account from "./Pages/Account";
import Cart from "./Pages/Cart";
//import Tool from "./Pages/Tool";
//import Nutrition from "./Pages/Nutrition";
import Cookie from "js-cookie";
import Dashboard from "./Pages/Dashboard";
import Breadcrums from "./Common/Breadcrums";
import AddEdit from "./Pages/Account/Address/addEdit";
import ProductList from "./Pages/ProductList";
import Razor from "./Pages/AfterOrder/payment";
import AddProduct from "./Pages/Account/Address/addProduct";
import ProdDetails from "./Pages/ProductDetails/details.js";
class App extends Component {
  /*componentDidMount() {
    const token = localStorage.getItem("token");
  }*/

  render() {
    const token = localStorage.getItem("token");
    return (
      <div id="wrapper">
        
        <section className="main-content">
          <Router>
            <Header />
            <Breadcrums />
            <Switch>
             {/** */} <Route exact path="/" component={Dashboard} />
              <Route exact path="/product_details" component={ProductDetails} />
              <Route exact path="/login" component={LoginSignUp} />
              <Route exact path="/register/otp" component={OTP} />
              <Route
                exact
                path="/register"
                component={() => <LoginSignUp index={1} />}
              />
              <Route path="/product" component={Product} />
              <Route path="/prod" component={Prod} />
              <Route path="/productdetails/:id" component={ProductDetails} />
              <Route path="/details/:product_id" component={ProdDetails} />
              
              

              <Route path="/blog" component={Blog} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/addproduct" component={AddProduct} />
              <Route path="/blogdetail/:id" component={BlogDetail} />
              <Route
                path="/order-success"
                component={() => <AfterOrder success={true} />}
              />
              <Route path="/payment" component={() =>  <Razor/>} />
             
              <Route path="/order-failure" component={() => <AfterOrder />} />
              <Route path="/addedit" component={() => <AddEdit />} />
              <Route path="/payment" component={() => <Razor/>} />
              <Route path="/acc" component={() => <Account />} />
              
              <Route path="/list" component={() =>  <ProductList />} />
              
              <Route
                path="/account"
                component={() =>
                  token ? <Account /> : <Redirect to="/login" />
                }
              />
              <Route path="/cart" component={Cart} />
              {/*<Route path="/tool" component={Tool} />
              <Route path="/i-nutrition" component={Nutrition} />*/}
            </Switch>
          </Router>
        </section>
        <Footer />
      </div>
    );
  }
}
export default App;
