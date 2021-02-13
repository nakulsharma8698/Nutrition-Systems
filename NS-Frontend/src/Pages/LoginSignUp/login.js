import React from "react";
import TextField from "@material-ui/core/TextField";
import messages from "../../utils/messages";
import { Fab, FormControlLabel, Checkbox } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./style.scss";
import Icon from "@material-ui/core/Icon";
import axios from 'axios';
import { API } from "./../../axios";
import { apis } from "./../../constants";
import Cookie from "js-cookie";
import { withRouter } from "react-router";
import { GoogleLogin } from 'react-google-login';



class Login extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
    showPaswor: false
  };
  //this.googleLogin = this.googleLogin.bind(this);

}

async signup(res) {
      const googleresponse = {
        Name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.googleId,
        Image: res.profileObj.imageUrl,
        ProviderId: 'Google'
      };
      //debugger;
      console.log(res.accessToken);
      alert("Login SuccessFul");
      localStorage.setItem('token', res.accessToken);
      localStorage.setItem('Name', res.profileObj.name);
      const token = localStorage.getItem('token');
      this.props.history.push("/");
      await axios.post('http://localhost:4000/userlogin', googleresponse)

      .then(res => {
        
        console.log(res);
        //alert("user added successfully");
        //console.log(res.data);
        //
        
    })
    .catch(function (error){
        console.log(error);
    })
  }

   
  onSubmit = async e => {
    e.preventDefault();
    const data = {};
    const formData = new FormData(e.target);
    data.mobile = formData.get("mobile");
    // data.password = formData.get("password");

    const response = await API.POST(apis.login, data);
    if (response.success) {
      Cookie.set("token", response.data.token);
      this.props.history.push("http://localhost:3000/acc/");
      window.location.reload();
    }
  };
  render() {
    const responseGoogle = (response) => {
            console.log(response.accessToken);
            var res = response.profileObj;
            //console.log(res.googleId);
            //debugger;
            //
            this.signup(response);
          }
    return (
      <div className="login-wrapper">
        <form
          className="login-form"
          noValidate
          autoComplete="off"
          onSubmit={data => this.onSubmit(data)}
        >
          <TextField
            classes={{ root: "login-input" }}
            label={messages.common.mobile_number}
            margin="normal"
            fullWidth
            required
            name="mobile"
          />
          <TextField
            type={this.state.showPassword ? "text" : "password"}
            classes={{ root: "login-input" }}
            label={messages.common.password}
            margin="normal"
            fullWidth
            name="password"
            required
            InputProps={{
              endAdornment: (
                <Fab
                  variant="extended"
                  size="small"
                  color="primary"
                  className="otp-btn button-red"
                >
                  {messages.common.login_via_otp}
                </Fab>
              )
            }}
          />
          <div className="forgot-wrapper">
            <FormControlLabel
              control={
                <Checkbox
                  onChange={event =>
                    this.setState({ showPassword: event.target.checked })
                  }
                />
              }
              label={messages.common.show_password}
            />
            <Button>{messages.common.forgot_password}</Button>
          </div>

          <Button
            variant="contained"
            className="login-btn button-red"
            type="submit"
          >
            {messages.common.login}
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
            {/*<Button
              variant="outlined"
              className="google-btn"
              startIcon={<Icon className="fa fa-google-plus" />}
              onClick={this.googleLogin}
            >
              Google
            </Button>*/}
            <GoogleLogin
              clientId="458074940237-4vf9d0efq72g65pei00uiqea218uqccq.apps.googleusercontent.com"
              buttonText="Google"
              render={renderProps => (
                <Button onClick={renderProps.onClick} startIcon={<Icon className="fa fa-google-plus" />} className="google-btn" variant="outlined"> Google</Button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
          <div className="terms-text">{messages.common.terms_text}</div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
