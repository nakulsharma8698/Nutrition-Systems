import React from "react";
import "./style.scss";
import Button from "@material-ui/core/Button";
import { API } from "./../../../axios";
import { apis } from "./../../../constants";

class Details extends React.Component {
  state = { firstName: "", lastName: "", email: "" };
  async componentDidMount() {
    const response = await API.POST(apis.accountDetails);
    if (response.success) {
      const data = response.data[0];
      const firstName = data.name.first_name;
      const lastName = data.name.last_name;
      const email = data.email;
      const mobile = data.mobile;
      const username = data.username;
      this.setState({
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile,
        username: username
      });
    }
  }
  async saveDetails(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = {};
    user.name = {};
    user.name.first_name = formData.get("first-name");
    user.name.last_name = formData.get("last-name");
    user.email = formData.get("email");
    user.mobile = this.state.mobile;
    await API.POST(apis.accountDetails, user);
  }
  render() {
    return (
      <div className="account-details-wrapper">
        <form onSubmit={e => this.saveDetails(e)}>
          <div className="account-info">
            <div className="info">
              <div className="label">First Name</div>
              <input
                name="first-name"
                type="text"
                defaultValue={this.state.firstName}
              />
            </div>
            <div className="info">
              <div className="label">Last Name</div>
              <input
                name="last-name"
                type="text"
                defaultValue={this.state.lastName}
              />
            </div>

            <div className="info">
              <div className="label">Email</div>
              <input name="email" type="text" defaultValue={this.state.email} />
            </div>
            <div className="info">
              <div className="label">Mobile</div>
              <input
                name="mobile"
                type="number"
                defaultValue={this.state.mobile}
              />
            </div>
            <div className="info">
              <div className="label">Display Name</div>
              <input
                name="username"
                type="text"
                defaultValue={this.state.username}
              />
              <div className="helptext">
                (This will be how your name will be displayed in the account
                section and in reviews.)
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            className="submit button-red"
            type="submit"
          >
            Save Changes
          </Button>
        </form>
      </div>
    );
  }
}
export default Details;
