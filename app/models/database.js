const pg = require('pg'); // PostgreSQL

const db = {};
const config = require('./../server/config');
const uri = process.env.ELEPHANTSQL_URL || config.url;

// initialization of sql server
const client = new pg.Client(uri);
client.connect((err, db_) => {
    if (err) return console.error('could not connect to postgres', err);
    db.conn = db_;
});

module.exports = db;