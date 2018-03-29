import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

const style = {
    margin: 12,
    backgroundColor: 'teal',
    color: 'black'
  };

class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {

    };
    //binding here
    }
    render() {
        return (
           < div id ="parent">
            <div>
            <h1>Interview Wars Login</h1>
            </div>
            <div>
    <TextField >  </TextField>
      Username
    <br />

    <TextField > </TextField>
      Password
     <Button label="Login" style={style} > <Link to="/home">Login</Link> </Button >
    </div>
    </div>
        )
    }
}

export default Login;
