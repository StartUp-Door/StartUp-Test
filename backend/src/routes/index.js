const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Successful Running an API',
    version: '1.0.0',
  });
});

module.exports = router;