import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
<MuiThemeProvider>
    <App />
</MuiThemeProvider>,
document.getElementById('app'));
