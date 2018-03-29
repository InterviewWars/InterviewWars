import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';

const style = {
    margin: 12,
    backgroundColor: 'teal',
    color: 'black'
  }; 

  class UserAnswers extends Component {
    constructor(props) {
    super(props);
    this.state = {

    };
    // binding here
}

render() {
    return (
        <div>
            <h1> Thanks for your solution! Please find other user solutions below: </h1>
        </div>
    )
}
}

export default UserAnswers;