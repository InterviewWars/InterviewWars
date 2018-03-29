const db = require('../models/database');

const searchController = {
  getAllQuestions: function (req, res, next) {
    const string = 'SELECT * FROM questions;';

    db.query(string)
        .then(dbRes => {
          res.locals.question = dbRes.rows;
          next()
        })
        .catch(e => res.send(e));
  },

  selectBy: function (req, res, next) {
    const { table, column, input } = req.body;
    const string = `SELECT * FROM ${table} WHERE ${column} = '${input}'`;

    db.query(string)
        .then(dbRes => {
          res.locals.question = dbRes.rows;
          next()
        })
        .catch(e => res.send(e));
  },
};

module.exports = searchController;