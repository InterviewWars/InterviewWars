const express = require('express');
const app = express();
const path = require('path');
const http = require ('http');
const bodyParser = require('body-parser');
const cookieParser = requrie('cookie-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(3000);

module.exports = app;