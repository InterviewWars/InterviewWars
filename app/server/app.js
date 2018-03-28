const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userController = require("./../controllers/userController");
const questionController = require("./../controllers/questionController");
const answerController = require("./../controllers/answerController");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("public"));
console.log('hello');
// Users
app.post(
  "/loginUser",
  userController.verifyUser,
  userController.createNewUser,
  (req, res) => {
    return res.json(res.locals.result);
  }
);

app.get("/getAllUsers", userController.getAllUsers, (req, res) => {
  res.send("get all user");
});


// Questionsç
app.post('/addQuestion', questionController.addQuestion, (req, res) => res.send(res.locals.questionid));

//Answers
app.post('/addAnswer', answerController.addAnswer, (req, res) => res.send(res.locals.questionid));

module.exports = app;
