var express = require('express');
var router = express.Router();
var script = require('../services/script');

// LIST HOOK
router.get('/list', function(req, res, next) {
  script.get_hook_list(function(err, items){
    res.send(items.map(function(item){
      return {
        id : item._id,
        name : item.name,
        src : item.src
      };
    }));
  });
});

// GET HOOK
router.get('/', function(req, res, next) {
  script.get_hook(
    req.body.name,
    function(err, item){
      res.send({
        id : item._id,
        name : item.name,
        src : item.src
      });
    });
});

// CREATE HOOK
router.post('/', function(req, res, next) {
  console.log(req);
  script.create_hook(
    req.body.name,
    function(err, item){
      res.send({
        id : item._id,
        name : req.body.name,
        src : ""
      });
    });
});

// UPDATE HOOK
router.put('/', function(req, res, next) {
  console.log(req.body.item);
  script.update_hook(
    req.body.item,
    function(err, item){
      res.send({
      });
    });
});

module.exports = router;
