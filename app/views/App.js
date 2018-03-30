import React, { Component } from 'react';
import Login from './Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Question from './Question';
import Answer from './Answer';
import UserAnswers from './UserAnswers'

// css 
import './../style/Main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allQuestions: []
        };
        // binding here
        this.getAllQuestions = this.getAllQuestions.bind(this);
        this.searchQuestionsBy = this.searchQuestionsBy.bind(this);
        this.getQuestion = this.getQuestion.bind(this);
    }

    componentDidMount() {
        this.getAllQuestions();
    }

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

    getQuestion(id) {
        const allQuestions = this.state.allQuestions;
        const questionObj = allQuestions.find((question) => {
            return question.__questionid == id;
        });
        return questionObj.question;
    }

    getAllQuestions() {
        const that = this;
        // fetch()
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/getAllQuestions",
            success: function (resp) {
                console.log(resp);
                that.setState({ allQuestions: resp });
            },
            error: function (err) {
                console.log("Get Questions Error", err);
            }
        });
    }


   render() {
      return (
          <Router>
         <div>
            <Route exact path ='/' component={Login} />
            <Route path ='/home' render={() => <Home allQuestions={this.state.allQuestions} search={this.searchQuestionsBy}/>}/>
            <Route path ='/question' component={Question} />
            <Route path ='/answer/:id' render={(props) => <Answer {...props} getQuestion={this.getQuestion}/>} />
            <Route path ='/useranswers' component={UserAnswers} />
         </div>
         </Router>
      );
   }
}


export default App;
