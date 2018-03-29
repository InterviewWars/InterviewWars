import React, { Component } from "react";
import Button from "material-ui/Button";
import { render } from "react-dom";
import { Link } from "react-router-dom";

const style = {
  margin: 12,
  backgroundColor: "teal",
  color: "black"
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: []
    };
    // binding here
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    // this.getQuestions();
  }

  getQuestions() {
    // fetch()
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/getAllUsers",
      success: function(resp) {
        // console.log('This is the response from ajax', resp);
        // console.log("wee got it back");
        // x.updateQuestions(resp);
      },
      error: function(err) {
        console.log("error", err);
        // console.log("shieeeeeeeeeeeeeeeeeeeeeeeettt");
      }
    });
  }

  render() {
    console.log(this.getQuestions());
    return (
      <div>
        <h1> Welcome to Interview Wars! </h1>
        <h2>
          {" "}
          Please answer a question below or submit a new question{" "}
          <Button label="SubmitQ" style={style}>
            {" "}
            <Link to="/question">Submit New </Link>{" "}
          </Button>
        </h2>
        <Button label="Answer" style={style}>
          <Link to="/answer">Answer </Link>
        </Button>
      </div>
    );
  }
}

export default Home;
