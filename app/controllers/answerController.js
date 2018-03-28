const db = require('../models/database');

const answerController = {
    addAnswer: function (req, res, next) {
      console.log('answer')
      //deconstructs inputs
      const { __questionid, __authorid, answer } = req.body;

      //builds query string
      const string = {
        text: `INSERT INTO answers (__questionid, __authorid, answer)
        VALUES ($1, $2, $3) RETURNING *;`,
        values: [__questionid, __authorid, answer]
      };

      //fires query to db returning answerid to client
      db.query(string)
          .then(dbRes => {
            res.locals.questionid = dbRes.rows[0];
            next();
          })
          .catch(e => res.send(e));
    },
};

module.exports = answerController;
