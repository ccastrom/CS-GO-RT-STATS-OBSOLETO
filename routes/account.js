const express = require('express');
const ruta=express.Router();


var steam = require('steam-web');
var s = new steam({
  apiKey: '5DC20E24D2E76A091F52A43BCCBFA67A',
  format: 'json' //optional ['json', 'xml', 'vdf']
});


ruta.use(express.static('public'));
ruta.use(express.static('views'));
ruta.use(express.static('views/bootstrap'));
ruta.use(express.static('node_modules/bootstrap/dist/js'));
ruta.use(express.static('public/images'));

ruta.get('/profile', ensureAuthenticated, function(req, res){
    s.getUserStatsForGame({
      steamid: req.user.id,
      appid: 730,
      callback: function(err,data) {
        if(err){
          res.status(400);
        }else{
        var kills=data.playerstats.stats[0].value
         console.log(data.playerstats.stats[0].value);
         res.render('profile',  { user: req.user,stats:kills });
        }
      }
    })
  });

  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
    console.log("no autenticado")
  }

  ruta.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });



  module.exports=ruta;
