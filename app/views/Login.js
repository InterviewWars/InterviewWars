import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

import "./../style/Login.css";

const style = {
  margin: 12,
  backgroundColor: "#0b0c0c",
  color: "#424242"
};

const fieldStyle = {
  color: "white"
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //binding here

    this.googleOAuthSuccess = this.googleOAuthSuccess.bind(this);
    this.googleOAuthFailure = this.googleOAuthFailure.bind(this);
  }

  // This is the response method for Google oAuth Success
  googleOAuthSuccess(result) {
    console.log("This is the google result success", result);
  }

  // This is the response method for Google oAuth Failure
  googleOAuthFailure(result) {
    console.log("This is the google result failure", result);
  }

  render() {
    return (
      <div id="parent">
        <div>
          <h1>Interview Wars</h1>
        </div>
        <div className="form-div">
          <form id="login-panel" action="">
            <div className="fields text-center">
              <label htmlFor="">Username</label>
            </div>
            <div className="fields text-center">
              <TextField hintText="" />
            </div>
            <div className="fields text-center">
              <label htmlFor="">Password</label>
            </div>
            <div className="fields text-center">
              <TextField />
            </div>
            <div className="fields text-center">
              <Button  label="Login" className="text-red" style={style}>
                {" "}
                <Link id="login-button" to="/home">Login</Link>{" "}
              </Button>
            </div>
            <div>
            </div>
            <div id="googlOAuth-div">
              <GoogleLogin 
                clientId="881814036265-e59ej1jgrmph8v4h9pffl1629dpqssdn.apps.googleusercontent.com"
                buttonText="Google Login"
                onSuccess={this.googleOAuthSuccess}
                onFailure={this.googleOAuthFailure}
              />
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default Login;
