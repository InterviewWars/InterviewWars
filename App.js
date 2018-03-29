import React, { Component } from 'react';
import Login from './Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Question from './Question';
import Answer from './Answer';

class App extends React.Component {
   render() {
      return (
          <Router>
         <div>
            <Route exact path ='/' component={Login} />
            <Route path ='/home' component={Home} />
            <Route path ='/question' component={Question} />
            <Route path ='/answer' component={Answer} />
         </div>
         </Router>
      );
   }
}


export default App;
