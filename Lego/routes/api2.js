var createError = require('http-errors'); 
var express = require('express');
var router = express.Router();
const lego2 = require('../lego.json');
/* GET home page. */
router.get('/Lego/:Number', function(req, res, next) {
 let lego = lego2.castelli.find(p => p.Number == req.params.Number)
    if (typeof lego == 'undefined') {  
    return next(createError(300, 'PERSONA NON TROVATA AHAH')); 
 }
 else
 {
   let data = JSON.stringify(lego);
   res.send(data);
 }
});

module.exports = router;
