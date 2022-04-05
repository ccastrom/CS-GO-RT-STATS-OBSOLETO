const { Router } = require('express');
const express = require('express');
const ruta=express.Router();
const User= require('../models/user_model');

var steam = require('steam-web');
var kills;
var stats;

var s = new steam({
  apiKey: '5DC20E24D2E76A091F52A43BCCBFA67A',
  format: 'json' //optional ['json', 'xml', 'vdf']
});



ruta.use(express.static('views'));
ruta.use(express.static('views/bootstrap'));
ruta.use(express.static('node_modules/bootstrap/dist/js'));
ruta.use(express.static('public/images'));




ruta.get('/',async(req,res)=>{
   //let resultado=selectDataUser();
   res.render('index', { user: req.user });

   if(req.user==null){
     console.log("nada")
   }else{
    s.getUserStatsForGame({
      steamid: req.user.id,
      appid: 730,
      callback: function(err,data) {
        kills=data.playerstats.stats[0].value
        console.log(data.playerstats.stats[0].value);
      }
    })
   }
   
   

   
});

ruta.get('/account', ensureAuthenticated, function(req, res){

  res.render('account',  { user: req.user, stats:kills });

});

ruta.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

    
async function  selectDataUser(){
  let usuarios= await User
  .find({
    'data.Usuario.Nombre':'BRAVO SIX'
  })
  .limit(1)
  .select({"data.Usuario.Nombre":1})
  console.log(usuarios);
  return usuarios;
}

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
  console.log("no autenticado")
}


module.exports=ruta;
