var express = require('express');
var router = express.Router();
const path = require('path');
/* GET home page. */
router.get('/Tutto', function(req, res,) {
  res.sendFile(path.join(__dirname, '../lego.json'));
});

module.exports = router;
