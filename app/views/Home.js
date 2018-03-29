import React, { Component } from "react";
import { Button, Subheader, List, ListItem, Select, InputLabel, TextField, FormControl}  from "material-ui";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import './../style/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: [],
      age: '',
      name: '',
    };
    // binding here
    this.getQuestions = this.getQuestions.bind(this);
    this.searchQuestionsBy = this.searchQuestionsBy.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  searchQuestionsBy(e) {
    e.preventDefault();
    const that = this;
    const data = {
      column: e.target.category.value,
      table: "questions",
      input: e.target.input.value
    };

    fetch("http://localhost:3000/selectBy", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => {
      return res.json();
    }).then(res => {
      that.setState({ allQuestions: res })
    })
        .catch(error => console.error('Error:', error))
  }

  getQuestions() {
    const that = this;
    // fetch()
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/getAllQuestions",
      success: function(resp) {
        that.setState({ allQuestions: resp });
      },
      error: function(err) {
        console.log("Get Questions Error", err);
      }
    });
  }

  render() {
    const state = this.state;
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
        <h2>
          {" "}
          <form onSubmit={this.searchQuestionsBy}>
          <InputLabel htmlFor="age-native-simple"><h2>Search questions{" "}</h2></InputLabel>
          <Select
              native
              inputProps={{
                id: 'category',
              }}
          >
            <option value="" />
            <option value='difficulty'>Difficulty</option>
            <option value='company'>Company</option>
            <option value='type'>Type</option>
          </Select>
            <TextField id='input' placeholder='Enter search term'/>
          </form>

        </h2>
        <List>
          {Questions}
        </List>
      </div>
    );
  }
}

export default Home;
