import React, { Component } from 'react';
import Login from './Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Question from './Question';

class App extends React.Component {
   render() {
      return (
          <Router>
         <div>
            <Route exact path ='/' component={Login} />
            <Route path ='/home' component={Home} />
            <Route path ='/question' component={Question} />
         </div>
         </Router>
      );
   }
}


export default App;
