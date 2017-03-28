var express = require('express');
var router = express.Router();
var database = require('pg-module');

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
  

  res.send('inventory');
});

module.exports = router;
