const pg = require('pg'); // PostgreSQL

const db = {};
const config = require('./config');
const uri = process.env.ELEPHANTSQL_URL || config.url;

// initialization of sql server
client.connect(uri, (err, db_) => {
    if (err) return console.error('could not connect to postgres', err);
    db.conn = db_;
});

module.exports = db;