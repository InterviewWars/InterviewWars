
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
<MuiThemeProvider>
    <App />
</MuiThemeProvider>,
document.getElementById('app'));
