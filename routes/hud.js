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
    let resultado= getActualRound();
    resultado.then(actualRound=>{
       res.render('hud.ejs',{ronda:actualRound})
    })

    
});



async function  getActualRound(){
    let actualRound= await Round.find().sort({"round":1}).distinct("round");
   
    return actualRound;
}






module.exports=ruta;