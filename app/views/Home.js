import React, { Component } from "react";
import { Button, Subheader, List, ListItem, Select, InputLabel, TextField, FormControl } from "material-ui";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import "./../style/Home.css";

class Home extends Component {

  render() { 
    const Questions = this.props.allQuestions.map((oneQuestion, index) => {
      const {
        difficulty,
        type,
        company,
        created_at,
        question,
        __questionid: questionID,
        __authorID: authorID
      } = oneQuestion;

      const url = `/answer/${questionID}`;

      return (
        <li key={questionID} className="questions">
        <div>
          {question} <br/>
          {difficulty} <br/>
          </div>
          <div>
          <Button label="Answer" className="answer">
            <Link to={url} testing="hello"> Answer </Link>
          </Button>
          </div>
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
        <form onSubmit={this.props.search}>
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
          <TextField id='input' placeholder='Enter search term' />
        </form>
        <List>{Questions}</List>
      </div>
    );
  }
}

export default Home;
