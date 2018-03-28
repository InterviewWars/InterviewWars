const db = require('../models/database');

const questionController = {
    addQuestion: function (req, res, next) {
      const { question, author, answers, difficulty, type, company } = req.body;
      const string = {
        text: `INSERT INTO questions (question, submitter, answers, difficulty, type, company) 
        VALUES ($1, $2, $3, $4, $5, $6);`,
        values: [question, author, answers, difficulty, type, company]
      };
      db.query(string)
          .then(res => {
            console.log(res)
          })
          .catch(e => console.log('error', e));
      next();
    }

};


module.exports = questionController;
