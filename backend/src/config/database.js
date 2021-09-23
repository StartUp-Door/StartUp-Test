const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Connected to the Startup_Door in postgreSQL DB!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};