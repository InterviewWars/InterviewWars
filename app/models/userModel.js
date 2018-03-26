const pg = require('pg'); // PostgreSQL

const db = {};
const config = require('./config');
const uri = process.env.ELEPHANTSQL_URL || config.url;

// initialization of sql server
client.connect(uri, (err, db_) => {
    if (err) return console.error('could not connect to postgres', err);
    db.conn = db_;
    client.query('SELECT NOW() AS "theTime"', (err, result) => {
        if (err) return console.log('error running query', err);
        console.log(result.rows[0].theTime);
        client.end();
    });
});

module.exports = db;