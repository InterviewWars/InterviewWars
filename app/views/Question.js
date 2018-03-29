import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';

const style = {
    margin: 12,
    backgroundColor: 'black',
    color: 'black'
  }; 

  class Question extends Component {
    constructor(props) {
    super(props);
    this.state = {

    };
    // binding here
}

render() {
    return (
        <div id="parent2">
        <div>
            <h1> Thanks for adding your interview question! </h1>
            <h2> <textarea
  rows="10"
  cols="60"
/> 
</h2>
</div>
<div>
<TextField > </TextField > Difficulty
</div>
<div>
<TextField > </TextField > Type
</div>
<div>
<TextField > </TextField > Company
</div>

 <Button label="Submit" style={style} > Submit
 </Button >
        </div>
    )
}
}

export default Question;