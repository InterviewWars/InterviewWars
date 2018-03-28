const client = require("../models/database");

const userController = {
  // verifies existence of user in the database
  verifyUser: function(req, res, next) {
    const { email } = req.body;
    const text = `SELECT * FROM USERS WHERE email=$1`;
    const values = [email];

    client
      .query(text, values)
      .then(result => {
        const locals = res.locals;
        const rows = result.rows;
        if (rows.length === 0) {
          locals.result = { email, new: true };
        } else {
          locals.result = rows[0];
          locals.result.new = false;
        }
        next();
      })
      .catch(e => console.log("Error for verifyuser: \n", e.stack));
  },

  // Creates user only in conditional that user does not exist in database
  createNewUser: function(req, res, next) {
    const locals = res.locals;
    const text = `INSERT INTO users(email) VALUES($1) RETURNING *`;
    const values = [`${locals.result.email}`];

    if (locals.result.new) {
      client
        .query(text, values)
        .then(result => {
          res.locals.result = result.rows[0];
          next();
        })
        .catch(e => console.log("Error for createNewUser: \n", e.stack));
    } else {  
      next();
    }
  },

  getAllUsers: function(req, res, next) {
    const text = "SELECT * FROM users";
    client
      .query(text)
      .then(result => {
        console.log("This is all # of users", result.rows.length);
      })
      .catch(e => console.log(e.stack));
    next();
  }

};

module.exports = userController;
