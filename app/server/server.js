const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('./../controllers/userController');
const questionController = require('./../controllers/questionController');
const answerController = require('./../controllers/answerController');

const hostname = 'localhost';
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));

app.post('/addQuestion', questionController.addQuestion, (req, res) => res.send(res.locals.questionid));

app.post('/addAnswer', answerController.addAnswer, (req, res) => res.send(res.locals.questionid));

app.listen(port, hostname, () => console.log(`listening on http://${hostname}:${port}`));
module.exports = app;