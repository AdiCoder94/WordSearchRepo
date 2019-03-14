var express = require('express');
var router = express.Router();

router.get('/names', function(req, res){
    res.send("this is word names routes");
})

module.exports = router;