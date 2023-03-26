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
              userStats:data.playerstats.stats,
            },
            userLastMatch:{
             demo_id:result._id,
             userLastMap:result.demo_Data[0].Encabezado.mapName,
             userLastTscore:result.demo_Data[164][0].RoundData.tScore,           
             userLastCTscore:result.demo_Data[164][0].RoundData.ctScore,
             userLastMatchTeam: result.demo_Data[173][6].playerPostMatchStats.playerName,            
             userGameDate: result.gameDate,
             userRankOld:result.demo_Data[172][7].AccountsInfo.oldRank,            
             userRankNew:result.demo_Data[172][7].AccountsInfo.NewRank,            
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
          round0=[ 
            result.demo_Data[52],
            round1Kills=[
              result.demo_Data[53][0],
              result.demo_Data[54][0],
              result.demo_Data[55][0],
              result.demo_Data[56][0],
              result.demo_Data[57][0],
              result.demo_Data[58][0],
              result.demo_Data[59][0],
             
            ]
          ],
          round1=[ 
            result.demo_Data[60],
            round1Kills=[
              result.demo_Data[61][0],
              result.demo_Data[62][0],
              result.demo_Data[63][0],
              result.demo_Data[64][0],
              result.demo_Data[65][0],
              result.demo_Data[66][0],
             
            ]
          ],
          round2=[ 
            result.demo_Data[67],
            round2Kills=[
              result.demo_Data[68][0],
              result.demo_Data[69][0],
              result.demo_Data[70][0],
              result.demo_Data[71][0],
              result.demo_Data[72][0],
              result.demo_Data[73][0],
              result.demo_Data[74][0],
              result.demo_Data[75][0],
             
            ]
          ],
          round3=[ 
            result.demo_Data[76],
            round3Kills=[
              result.demo_Data[77][0],
              result.demo_Data[78][0],
              result.demo_Data[79][0],
              result.demo_Data[80][0],
              result.demo_Data[81][0],
              result.demo_Data[82][0],
              result.demo_Data[83][0],
              result.demo_Data[84][0],
              result.demo_Data[85][0],
             
            ]
          ],
          round4=[ 
            result.demo_Data[86],
            round4Kills=[
              result.demo_Data[87][0],
              result.demo_Data[88][0],
              result.demo_Data[89][0],
              result.demo_Data[90][0],
              result.demo_Data[91][0],
              result.demo_Data[92][0],
              result.demo_Data[93][0],
             
            ]
          ],
          round5=[ 
            result.demo_Data[94],
            round5Kills=[
              result.demo_Data[95][0],
              result.demo_Data[96][0],
              result.demo_Data[97][0],
              result.demo_Data[98][0],
              result.demo_Data[99][0],
              result.demo_Data[100][0],
              result.demo_Data[101][0],
              result.demo_Data[102][0],
             
            ]
          ],
          round6=[ 
            result.demo_Data[103],
            round6Kills=[
              result.demo_Data[104][0],
              result.demo_Data[105][0],
              result.demo_Data[106][0],
              result.demo_Data[107][0],
              result.demo_Data[108][0],
              result.demo_Data[109][0],
              result.demo_Data[110][0],
              result.demo_Data[111][0],
              result.demo_Data[112][0],
             
            ]
          ],
          round6=[ 
            result.demo_Data[113],
            round6Kills=[
              result.demo_Data[114][0],
              result.demo_Data[115][0],
              result.demo_Data[116][0],
              result.demo_Data[117][0],
              result.demo_Data[118][0],
              result.demo_Data[119][0],
              result.demo_Data[120][0],
             
            ]
          ],
          round7=[ 
            result.demo_Data[121],
            round7Kills=[
              result.demo_Data[122][0],
              result.demo_Data[123][0],
              result.demo_Data[124][0],
              result.demo_Data[125][0],
              result.demo_Data[126][0],
              result.demo_Data[127][0],
              result.demo_Data[128][0],
              result.demo_Data[129][0],
             
            ]
          ],
          round7=[ 
            result.demo_Data[130],
            round7Kills=[
              result.demo_Data[131][0],
              result.demo_Data[132][0],
              result.demo_Data[133][0],
              result.demo_Data[134][0],
              result.demo_Data[135][0],
              result.demo_Data[136][0],
             
            ]
          ],
          round8=[ 
            result.demo_Data[137],
            round8Kills=[
              result.demo_Data[138][0],
              result.demo_Data[139][0],
              result.demo_Data[140][0],
              result.demo_Data[141][0],
              result.demo_Data[142][0],
              result.demo_Data[143][0],
              result.demo_Data[144][0],
              result.demo_Data[145][0],
             
            ]
          ],
          round9=[ 
            result.demo_Data[146],
            round9Kills=[
              result.demo_Data[147][0],
              result.demo_Data[148][0],
              result.demo_Data[149][0],
              result.demo_Data[150][0],
              result.demo_Data[151][0],
              result.demo_Data[152][0],
              result.demo_Data[153][0],
              result.demo_Data[154][0],
             
            ]
          ],
          round9=[ 
            result.demo_Data[155],
            round9Kills=[
              result.demo_Data[156][0],
              result.demo_Data[157][0],
              result.demo_Data[158][0],
              result.demo_Data[159][0],
              result.demo_Data[160][0],
              result.demo_Data[161][0],
              result.demo_Data[162][0],
              result.demo_Data[163][0],
             
            ]
          ],
          round9=[ 
            result.demo_Data[164],
            round9Kills=[
              result.demo_Data[165][0],
              result.demo_Data[166][0],
              result.demo_Data[167][0],
              result.demo_Data[168][0],
              result.demo_Data[169][0],
              result.demo_Data[170][0],
              result.demo_Data[171][0],
             
            ]
          ],
           
            
           
           

         
    ]
    const kdaPlayers=[
      
    ]
    // for (let i = 0; i < roundDemoLogs.length; i++) {
    //   const element = roundDemoLogs[i];
    //   //console.log(element);
    //   for (let j = 0; j < roundDemoLogs[i][1].length; j++) {
    //     const element = roundDemoLogs[i][1][j].AttackerLogs.attacker;
    //     console.log(roundDemoLogs[i][1][j].AttackerLogs.attacker)
        
    //   }
      
    // }

   

        //console.log((result.demo_Data[53][0].AttackerLogs.attacker))

     
       
                  
        res.render('matchDetails',  { dataDemoFile: userStatsDemoFile,roundData:roundDemoLogs});
      
    
       
    
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
