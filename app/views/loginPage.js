import React from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldExampleControlled extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        value: 'Username',
      };
    }
  
    handleChange = (event) => {
      this.setState({
        value: event.target.value,
      });
    };
  
    render() {
      return (
        <div>
          <TextField
            id="text-field-controlled"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }


export default loginPage;