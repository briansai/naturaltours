const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const { tours } = require('./routes/tours.js');
const { features } = require('./routes/features.js');
const db = require('./db/pgConfig.js');

dotenv.config();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(tours);
app.use(features);

db.connect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port: ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
