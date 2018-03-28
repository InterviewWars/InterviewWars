import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { GoogleLogin } from "react-google-login";

const style = {
  margin: 12,
  backgroundColor: "teal",
  color: "black"
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
          <h1>Interview Wars Login</h1>
        </div>
        <div>
          <TextField> </TextField>
          Username
          <br />
          <TextField> </TextField>
          Password
          <Button label="Login" style={style}>
            {" "}
            Login{" "}
          </Button>
        </div>
        <GoogleLogin
          clientId="881814036265-e59ej1jgrmph8v4h9pffl1629dpqssdn.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={this.googleOAuthSuccess}
          onFailure={this.googleOAuthFailure}
        />
      </div>
    );
  }
}
export default Login;
