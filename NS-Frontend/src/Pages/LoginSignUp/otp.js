import React from "react";
import messages from "./../../utils/messages";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { API } from "./../../axios";
import { apis } from "./../../constants";
import { withRouter } from "react-router";
import Cookie from "js-cookie";

class OTP extends React.Component {
  onSubmit = async e => {
    e.preventDefault();
    const data = {};
    const formData = new FormData(e.target);
    data.mobile = formData.get("mobile");
    // static params
    data.fname = "abc12";
    data.lname = "abc1212";
    data.email = "abc12" + Math.random(0, 1000);
    data.username = "abc12";
    const response = await API.POST(apis.signup, data);
    if (response.success) {
      const loginresponse = await API.POST(apis.login, data);
      if (loginresponse.success) {
        Cookie.set("token", loginresponse.data.token);
        this.props.history.push("/");
        window.location.reload();
      }
    }
  };
  render() {
    return (
        <div className="login-signup">
        <div className="login-tab-wrapper">
        
      <div className="signup-wrapper">
        <span className="info-text">{messages.common.signup_text}</span>
        <form
          className="login-form"
          noValidate
          autoComplete="off"
          onSubmit={data => this.onSubmit(data)}
        >
          <TextField
            classes={{ root: "login-input" }}
            label="Enter OTP"
            margin="normal"
            fullWidth
            required
            name="mobile"
          />
         
          <Button
            variant="contained"
            className="login-btn button-red"
            type="submit"
          >
            Enter OTP
          </Button>
        </form>
        <div>
          <div className="or">
            <span>OR</span>
          </div>
          <span className="continue-text">{messages.common.continue_with}</span>
          <div className="social-btn-wrapper">
            <Button
              variant="outlined"
              className="facebook-btn"
              startIcon={<Icon className="fa fa-facebook" />}
            >
              {messages.common.facebook}
            </Button>
            <Button
              variant="outlined"
              className="google-btn"
              startIcon={<Icon className="fa fa-google-plus" />}
            >
              {messages.common.google}
            </Button>
          </div>
          <div className="terms-text">{messages.common.terms_text}</div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
export default withRouter(OTP);
