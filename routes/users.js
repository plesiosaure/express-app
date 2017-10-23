var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hey ! It\'s a GETy');
});

/********************
 * code for the quest 
 *********************/
router.put('/:name', function(req, res, next) {
  res.send('Hey my name is ' + req.params.name);
});

router.delete('/:id(\\d+)', function(req, res, next) {
  res.send('Hey it\'s a DELETE ID ' + req.params.id);
});

/********************
 * code for the quest 
 *********************/


/* GET user with ID. */
router.get('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a GET with ID ' + req.params.id);
});

/* POST user creation. */
router.post('/', function(req, res, next) {
  res.send('Hey ! It\'s a POST');
});

module.exports = router;