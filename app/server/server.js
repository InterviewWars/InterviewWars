const express = require('express');
const app = express();
const path = require('path');
const http = require ('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req,res,next){
  res.sendFile(path.join(__dirname, '../views/index.html'));
})

app.use(express.static('public'));
app.listen(3000);

module.exports = app;
