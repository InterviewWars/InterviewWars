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
        this.getQuestion = this.getQuestion.bind(this);
    }

    componentDidMount() {
        this.getAllQuestions();
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
            <Route path ='/home' render={() => <Home allQuestions={this.state.allQuestions}/>}/>
            <Route path ='/question' component={Question} />
            <Route path ='/answer/:id' render={(props) => <Answer {...props} getQuestion={this.getQuestion}/>} />
            <Route path ='/useranswers' component={UserAnswers} />
         </div>
         </Router>
      );
   }
}


export default App;
