var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.sendFile('777.html', { root: __dirname });
});

module.exports = router;
