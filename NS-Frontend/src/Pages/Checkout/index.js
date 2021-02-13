import React, { Component } from 'react';

class Checkout extends Component {
    state = {
        amount: this.props.location.state.price
      };
    constructor(props) {
        super(props);
        console.log(props.location.state);
        this.changeAmount = this.changeAmount.bind(this);
        this.openCheckout = this.openCheckout.bind(this);
      }
     
      changeAmount(e) {
        this.setState({amount: e.target.value})
      }
     
      openCheckout() {
        let options = {
          "key": "rzp_test_5S7Vmn7y0vcsj9",
          "amount": (this.state.amount)*100, // 2000 paise = INR 20, amount in paisa
          "name": "Merchant Name",
          "description": "Purchase Description",
          "image": "/your_logo.png",
          "handler": function (response){
            alert("Order Successful" + "Payment Id: " + response.razorpay_payment_id);
            console.log(response);
          },
          
          "notes": {
            "address": "Hello World"
          },
          "theme": {
            "color": "#DC143C"
          }
        };
     
        let rzp = new window.Razorpay(options);
        rzp.open();
      }
     
      render () {
        return (
          <div>
            <button onClick={this.openCheckout}>Pay Rs. {this.state.amount}</button> 
          </div>
        );
      }
    }


export default Checkout;