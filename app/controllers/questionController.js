const db = require('../models/database');

const questionController = {

  //adds a question to the database, __authorid must be provided
  addQuestion: function (req, res, next) {

    //deconstructs inputs
    const { question, __authorid, difficulty, type, company } = req.body;

    //builds query string
    const string = {
      text: `INSERT INTO questions (question, __authorid, difficulty, type, company) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      values: [question, __authorid, difficulty, type, company]
    };

    //fires query to db returning questionid to client
    db.query(string)
      .then(dbRes => {
        res.locals.question = dbRes.rows[0];
        next();
      })
      .catch(e => res.send(e));
  },

  getAllQuestions: function (req, res, next) {
    const string = 'SELECT * FROM questions;';

    db.query(string)
        .then(dbRes => {
          res.locals.question = dbRes.rows;
          next()
        })
        .catch(e => res.send(e));
  },

  selectByCompany: function (req, res, next) {
    const param = req.body.company;
    const string = `SELECT * FROM questions WHERE company = '${param}'`;
    db.query(string)
        .then(dbRes => {
          res.locals.question = dbRes.rows;
          next()
        })
        .catch(e => res.send(e));
  },

  selectByDifficulty: function (req, res, next) {
    const param = req.body.difficulty;
    const string = `SELECT * FROM questions WHERE difficulty = '${param}'`;
    db.query(string)
        .then(dbRes => {
          res.locals.question = dbRes.rows;
          next()
        })
        .catch(e => res.send(e));
  },

  selectByAuthor: function (req, res, next) {
    const param = req.body.__authorid;
    const string = `SELECT * FROM questions WHERE __authorid = '${param}'`;
    db.query(string)
        .then(dbRes => {
          res.locals.question = dbRes.rows;
          next()
        })
        .catch(e => res.send(e));
  },

};

module.exports = questionController;
