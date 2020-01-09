var express = require('express');
var router = express.Router();
const lego3 = require('../lego.json');
/* GET home page. */
router.get('/Lego/Name', (req,res) => {  
    let nomi = [];  //creare un vettore img
    let vett = Object.keys(lego3.castelli); // 
    // usiamo vett_people.length perchè il json non ha una misura
    for(let i = 0; i < vett.length; i++){ 
        //inseriamo dentro il vettore tutte le image del json in ordine 
        nomi.push(lego3.castelli[i].Name);            
    }
    // dentro data mettiamo img e la farà vedere
    let data = JSON.stringify(nomi);
    res.send(data);
});

module.exports = router;
