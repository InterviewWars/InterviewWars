const pg = require('pg'); // PostgreSQL
const config = require('./../secrets/config');
const uri = process.env.ELEPHANTSQL_URL || config.url;

// initialization of sql server
const client = new pg.Client(uri);
client.connect((err, db_) => {
    if (err) return console.error('could not connect to postgres', err);
});

module.exports = client;