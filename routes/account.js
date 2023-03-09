const express = require('express');
const accountRoute=express.Router();
const mongoQuery= require('../mongoDB/Querys/mongoQuery')



var steam = require('steam-web');
var s = new steam({
  apiKey: '5DC20E24D2E76A091F52A43BCCBFA67A',
  format: 'json' //optional ['json', 'xml', 'vdf']
});


accountRoute.use(express.static('public'));
accountRoute.use(express.static('views'));
accountRoute.use(express.static('views/bootstrap'));
accountRoute.use(express.static('node_modules/bootstrap/dist/js'));
accountRoute.use(express.static('node_modules/chart.js/dist'));
accountRoute.use(express.static('public/images'));


accountRoute.get('/profile', ensureAuthenticated, (req, res)=>{
    s.getUserStatsForGame({
      steamid: req.user.id,
      appid: 730,
      callback: function(err,data) {
        if(err){
          res.status(400);
        }else{
        let insertAPIDataResult=mongoQuery.insertAPIData(data.playerstats.stats)
        insertAPIDataResult.then(APIData=>{
        }).catch(err=>{
          console.log(err)
        })

       

        const getLastGameMatch=mongoQuery.findLastRecord()
        .then(result=>{

          const userStats={
            userAPIData:{
              userData:req.user,
              userKills:data.playerstats.stats,
            },
            userLastMatch:{
              userObject:result
            }
           
          }
  
       
          res.render('profile',  { steamProfileData: userStats });
         
        })

        

      
       
        
        }
      }
    })
  });

  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
    console.log("no autenticado")
  }

  accountRoute.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
  });





  module.exports=accountRoute;
