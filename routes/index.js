var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Check to see if a Wikipedia article exists for "Hitler".
  request('https://en.wikipedia.org/w/api.php?action=query&titles=Hitler&prop=info&format=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var json = JSON.parse(body);
      var hasTimeTravelBeenInvented = Object.keys(json.query.pages).length === 0;
      res.render('index', { hasTimeTravelBeenInvented });
    }
  })
});

module.exports = router;
