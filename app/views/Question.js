import React, { Component } from "react";
import Button from "material-ui/Button";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import TextField from "material-ui/TextField";

const style = {
  margin: 12,
  backgroundColor: "#0b0c0c",
  color: "black"
};

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // binding here
  }

  render() {
    return (
      <div>
        <div>
          <h1> Thanks for adding your interview question! </h1>
          <h2> Enter here</h2> <text-area rows="10" cols="60" />
        </div>
        <div>
          <Button label="Submit" style={style}>
            {" "}
            Submit{" "}
          </Button>
        </div>
      </div>
    );
  }
}

export default Question;
