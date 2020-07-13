const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const db = require('./db/pgConfig.js');

dotenv.config();

app.use(express.static(path.join(__dirname, '../client/dist')));

db.connect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port: ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.log('Connection error');
  });
