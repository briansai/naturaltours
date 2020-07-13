const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const db = require('./db/pgConfig.js');

dotenv.config();

app.use(express.static(path.join(__dirname, '../client/dist')));

const startConnection = async () => {
  try {
    await db.connect();
  } catch (err) {
    throw new Error('Database connection not working');
  }
};

startConnection()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port: ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
