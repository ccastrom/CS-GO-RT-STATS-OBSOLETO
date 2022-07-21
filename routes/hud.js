const express = require('express');
const hudRoute=express.Router();
const Round= require('../models/round_model');


hudRoute.use(express.static('public'));
hudRoute.use(express.static('views'));
hudRoute.use(express.static('views/bootstrap'));
hudRoute.use(express.static('node_modules/bootstrap/dist/js'));
hudRoute.use(express.static('node_modules/chart.js/dist'));



hudRoute.get('/', ensureAuthenticated, (req,res)=>{
    
        res.render('hud.ejs')
      
    })



hudRoute.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
    console.log("no autenticado")
  }



async function  getActualRound(){
 let actualRound= await Round.findOne({"round":{$gte:0},"kills":{$gte:0}}).sort({"round":1}).distinct("round");
   
    return actualRound;
}






module.exports=hudRoute;