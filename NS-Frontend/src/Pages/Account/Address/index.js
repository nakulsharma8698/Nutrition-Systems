import React from "react";
import "./style.scss";
import { API } from "./../../../axios";
import { apis } from "./../../../constants";
import AddEdit from "./addEdit";

class Address extends React.Component {
  state = {
    address: [],
    selectedAddress: null
  };
  componentDidMount() {
    this.getData();
  }
  async getData() {
    const response = await API.POST(apis.accountDetails);

    if (response.success) {
      this.setState({
        address: response.data[0].address,
        selectedAddress: null
      });
    }
  }
  async removeAddress(name) {
    const params = {};
    params.type = "remove";
    params.name = "name";

    const response = await API.POST(apis.address_change, params);
    if (response.success) {
      this.getData();
    }
  }
  renderAddressItem(address, index) {
    return (
      <div className="address-item" key={index}>
        <div className="name"> {address.name}</div>
        <div>{address.address}</div>
        <div>{address.city}</div>
        <div>{address.state}</div>
        <div>{address.country}</div>
        <div>{address.pin}</div>
        <div>{address.phoneno}</div>
        <div className="action">
          <span onClick={() => this.setState({ selectedAddress: address })}>
            Edit
          </span>
          <span className="seperator">|</span>
          <span onClick={() => this.removeAddress(address.name)}>Delete</span>
        </div>
      </div>
    );
  }
  render() {
    return (
      <React.Fragment>
        {!this.state.selectedAddress ? (
          <div className="address-wrapper">
            {this.state.address.map((item, index) =>
              this.renderAddressItem(item, index)
            )}
            <div
              className="address-item add"
              onClick={() => this.setState({ selectedAddress: {} })}
            >
              <img src="/images/add_address.png" alt="add address" />
            </div>
          </div>
        ) : (
          <AddEdit
            currentValue={this.state.selectedAddress}
            success={() => this.getData()}
          />
        )}
      </React.Fragment>
    );
  }
}
export default Address;
