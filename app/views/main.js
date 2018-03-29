import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Center from 'react-center';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
<MuiThemeProvider>
    <Center>
    <App />
        </Center>
</MuiThemeProvider>,
document.getElementById('app'));
