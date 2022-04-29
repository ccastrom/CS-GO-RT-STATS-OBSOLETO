const express = require('express');
const ruta=express.Router();
const Round= require('../models/round_model');


ruta.use(express.static('public'));
ruta.use(express.static('views'));
ruta.use(express.static('views/bootstrap'));
ruta.use(express.static('node_modules/bootstrap/dist/js'));
ruta.use(express.static('node_modules/chart.js/dist'));
ruta.use(express.static('public/images'));


ruta.get('/',(req,res)=>{
    var element;
    var element2;
    let resultado= getActualRound();
    resultado.then(actualRound=>{
        var rondas= JSON.parse(JSON.stringify(actualRound));
        console.log(rondas);
        for (let i = 0; i < rondas.length; i++) {
             element = rondas[i]
            
            console.log(element);
           
            
        }
        res.render('hud.ejs',{ronda:element})
      
    })

    
});



async function  getActualRound(){
    let actualRound= await Round.findOne({"round":{$gte:0},"kills":{$gte:0}}).sort({"round":1}).distinct("round");
   
    return actualRound;
}






module.exports=ruta;