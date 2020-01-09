var createError = require ('http-errors'); // per creare l'errore
var express = require('express');
var router = express.Router();
var lego_file = require('../lego.json');
// come se ci fosse davanti dettagli
router.get('/:Number/', function(req,res,next){
    let lego = lego_file.castelli.find(p => p.Number == req.params.Number) //poeta contiene la corrispondenza dei 2 parametri: controlla se il numero nell'URL è uguale ad un numero dentro il json
    if (typeof lego === "undefined"){
        return next (createError(300, 'lego non trovato'));
    }
    else{
        res.render ('istruzioni',{
            title : `${lego.Name}`,
            lego, // contiene tutto il contenuto del'json di quel numero specifico inserito nell' URL
        }) ; ;
    }
})
module.exports = router;