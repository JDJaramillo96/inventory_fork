var express = require('express');
var router = express.Router();
var database = require('pg-module');

var query;

/* GET home page. */
router.get('/:userId', function(req, res, next) {
  var specificItemID = req.query.itemID;

  query = "";

  res.send (req.params.userId);
});

module.exports = router;
