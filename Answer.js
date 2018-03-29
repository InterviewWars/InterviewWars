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

  class Answer extends Component {
    constructor(props) {
    super(props);
    this.state = {

    };
    // binding here
}

render() {
    return (
        <div>
            <h1> Thanks for working on a solution! </h1>
            <h2> Enter here  <textarea
  rows="10"
  cols="60"
/> 
 <Button label="Submit" style={style} > Submit </Button ></h2>
        </div>
    )
}
}

export default Answer;