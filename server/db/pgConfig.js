const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config({ silent: true });

const pool = new Pool({
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

module.exports = pool;
