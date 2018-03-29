import React, { Component } from "react";
import { Button, Subheader, List, ListItem } from "material-ui";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import './../style/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: []
    };
    // binding here
    // this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    const that = this;
    // fetch()
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/getAllQuestions",
      success: function(resp) {
        console.log(resp);
        that.setState({ allQuestions: resp });
      },
      error: function(err) {
        console.log("Get Questions Error", err);
      }
    });
  }

  render() {
    const state = this.state;
    console.log(this.state.allQuestions);
    const Questions = state.allQuestions.map((oneQuestion, index) => {
      const {
        difficulty,
        type,
        company,
        created_at,
        question,
        __questionid: questionID,
        __authorID: authorID
      } = oneQuestion;
      console.log("this is the key", questionID);
      return (
        <li key={questionID} className="questions">
          {question} {type} {company} {created_at}
          <Button label="Answer" className="answer">
            <Link to="/answer">Answer </Link>
          </Button>
        </li>
      );
    });

    return (
      <div>
        <h1> Welcome to Interview Wars! </h1>
        <h2>
          {" "}
          Please answer a question below or submit a new question{" "}
          <Button label="SubmitQ">
            {" "}
            <Link to="/question">Submit New </Link>{" "}
          </Button>
        </h2>
        <List>
          {Questions}
        </List>
      </div>
    );
  }
}

export default Home;
