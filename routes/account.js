const express = require('express');
const accountRoute=express.Router();
accountRoute.use(express.json());
accountRoute.use(express.urlencoded());

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

       

        const getLastGameMatch=mongoQuery.findLastDemoFileRecord()
        .then(result=>{
         
          const userStats={
            userAPIData:{
              userData:req.user,
              userKills:data.playerstats.stats,
            },
            userLastMatch:{
             demo_id:result._id,
             userLastMap:result.demo_Data[0].Encabezado.mapName,
             userLastTscore:result.demo_Data[164][0].RoundData.tScore,           
             userLastCTscore:result.demo_Data[164][0].RoundData.ctScore,
             userLastMatchTeam: result.demo_Data[173][6].playerPostMatchStats.playerName,            
            },
         
           
          }
  
       
          res.render('profile',  { steamProfileData: userStats });
         
        })
        
        }
      }
    })
  });

  accountRoute.post('/matchDetail',(req,res)=>{
    console.log(req.body.demoFileID)
    
    let getLastDemoFileDocument=mongoQuery.findLastDemoFileRecordByID(req.body.demoFileID)
    .then(result=>{
      var str=" "+result.demo_Data[0].Encabezado.serverName
      var serverParsed= str.slice(1,25)
    
      let getAPIDocument=mongoQuery.findLastAPIRecord()
      .then(apiResult=>{

        const userStatsDemoFile={
        
          userLastMatch:{
           demo_id:result._id,
           userLastMap:result.demo_Data[0].Encabezado.mapName,
           userLasServer:serverParsed,
           userLastTscore:result.demo_Data[164][0].RoundData.tScore,           
           userLastCTscore:result.demo_Data[164][0].RoundData.ctScore,
           userLastMatchTeamKDA: result.demo_Data[173][6].playerPostMatchStats,            
          }
         
        }

        
        const roundDemoLogs=[
           
            result.demo_Data[52],//0
            result.demo_Data[60],
            result.demo_Data[67],
            result.demo_Data[76],
            result.demo_Data[86],
            result.demo_Data[94],
            result.demo_Data[103],
            result.demo_Data[113],
            result.demo_Data[121],
            result.demo_Data[130],
            result.demo_Data[137],
            result.demo_Data[146],
            result.demo_Data[155],
            result.demo_Data[164],
           ]
          
           
           
         
        
          
         
        

        for (let i = 0; i < roundDemoLogs.length; i++) {
          const element = roundDemoLogs[i];
          console.log(element)
          
        }

       
       

       
        
        res.render('matchDetails',  { dataDemoFile: userStatsDemoFile,dataAPI:apiResult,roundData:roundDemoLogs });
      })
    
       
    
    })
    
    
  
    

  })

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
