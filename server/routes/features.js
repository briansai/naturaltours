const express = require('express');
const db = require('../db/pgConfig.js');
const router = express.Router();

router.get('/api/features', (req, res) => {
  const q = `SELECT * FROM features`;
  db.query(q, (err, result) => {
    if (err) {
      throw new Error(err);
    }

    res.status(200).send(result.rows);
  });
});

module.exports = {
  features: router
};
