import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider';
import loginPage from '/.LoginPage';

const App = () => (
    <MuiThemeProvider>
        <LoginComponent />
    </MuiThemeProvider>    
);
