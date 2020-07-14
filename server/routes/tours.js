const express = require('express');
const db = require('../db/pgConfig.js');
const router = express.Router();

router.get('/api/tours', (req, res) => {
  const q = `SELECT * FROM adventure`;
  db.query(q, (err, result) => {
    if (err) {
      throw new Error(err);
    }

    res.status(200).send(result.rows);
  });
});

module.exports = {
  tours: router
};
