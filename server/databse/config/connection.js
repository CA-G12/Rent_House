const { Pool } = require('pg');
require('env2')('.env');

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) throw new Error('invalid db url');

const connection = new Pool({
  connectionString: DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? {
      rejectUnauthorized: false,
    }
    : false,
});

module.exports = connection;
