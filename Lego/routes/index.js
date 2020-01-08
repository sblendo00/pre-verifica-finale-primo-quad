var express = require('express');
var router = express.Router();
const lego = require ('../lego.json') // contiene tutto il json 
/* GET home page. */
router.get('/', (req, res) => {
    // .render passa alla pagina pug tra gli apici ES: 'index'
  res.render('index', { 
      title: 'Lego' ,
      lego: lego.castelli
    });
});

module.exports = router;