import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { render } from 'react-dom';

class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {

    };
// binding here
}
render() {
    return (
        <div>
            <h1> Welcome Interview Wars! </h1>
            <h2> Please help other users by answering a question or submitting an answer </h2>
        </div>
    )
}
}


export default Home;
