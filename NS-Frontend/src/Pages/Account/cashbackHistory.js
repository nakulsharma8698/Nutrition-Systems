import React from "react";
import { API } from "./../../axios";
import { apis } from "./../../constants";

class CashbackHistory extends React.Component {
  state = { data: [] };
  async componentDidMount() {
    const response = await API.POST(apis.cashback);

    if (response.success) {
      this.setState({ data: response.data });
    }
  }
  renderRow(item) {
    return (
      <tr key={item._id}>
        <td>{item.user_id}</td>
        <td>{item.order_id}</td>
        <td>{item.wallet_id}</td>
        <td>{item.date}</td>
        <td>{item.amount}</td>
      </tr>
    );
  }
  render() {
    return (
      <div className="cashback-wrapper">
        <table>
          <thead>
            <tr>
              <td>User Name</td>
              <td>Order Id</td>
              <td>Wallet Id</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => this.renderRow(item))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default CashbackHistory;
