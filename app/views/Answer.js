import React, { Component } from "react";
import Button from "material-ui/Button";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import TextField from "material-ui/TextField";

import './../style/Answer.css';

const style = {
  margin: 12,
  backgroundColor: "white",
  color: "black"
};

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        question: ''
    };
  }

  componentDidMount() {
      const question = this.props.getQuestion(this.props.match.params.id);
      this.setState({ question });
  }


  render() {
    return (
      <div>
        <h1> Thanks for working on a solution! </h1>
        <h3> Question: {this.state.question}</h3>
        <form action="">
        <div className="fields">
          <textarea rows="10" cols="60" placeholder="Please input answer here..." />
                </div>
          <div className="fields">
            <Button id="answer-submit" label="Submit" style={style}>
              <Link to="/useranswers"> Submit </Link>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Answer;
