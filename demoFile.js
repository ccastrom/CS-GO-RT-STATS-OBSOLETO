const fs = require("fs");
const { DemoFile } = require("demofile");




function parseDemoFile(path) {

  fs.readFile(path, (err, buffer) => {
    const demoFile = new DemoFile();


    demoFile.on("end", e => {
      if (e.error) {
        console.error("Error during parsing:", e.error);
        //process.exitCode = 1; //disabled atm we won't to continue on to the next file
      }
      console.log("Finished.");
    
      console.log("Deleting parsed file");
      fs.appendFileSync(outputPath, "]", 'utf-8')
     
      fs.unlinkSync(path)
      console.log("On to the next haul");
      parseDemosInInput();
    });
    demoFile.on("start", () => {
     
      var result={"Encabezado":demoFile.header}
     
      fs.appendFileSync(outputPath, JSON.stringify(result,null,4) +',', 'utf-8',
      (err)=>{
        if (err) throw err;

        console.log("Data is appended");
      })
    });

    demoFile.userMessages.on("ServerRankUpdate", um => {
      console.log("Player rank updates:");
      var ranks=[];
      for (const update of um.rankUpdate) {
        const player = demoFile.entities.getByAccountId(update.accountId);
        if (!player) console.log(`> (unknown player ${update.accountId})`);
        else
        
        ranks.push({
         
            AccountsInfo:{
              idAccount:update.accountId,
              playerName:player.name,
              oldRank:update.rankOld,
              NewRank:update.rankNew
            }
          
      
          
         
        });
       
       
      }
      //console.log(ranks);
       
      fs.appendFileSync(outputPath, JSON.stringify(ranks,null,4)+',' , 'utf-8',)
    });

    
  

    demoFile.gameEvents.on("round_start", (e) => {
      let roundNumber = 0;
      roundNumber += 1;
      const teams = demoFile.teams;
      const terrorists = teams[2];
      const cts = teams[3];
    
      const rounds = terrorists.score + cts.score;
      const tr_score = terrorists.score;
      const ct_score = cts.score;
      var round=[]
  
        round.push({
          RoundData: {
            roundValue: rounds,
            tScore: tr_score,
            ctScore: ct_score
          }
        })
       
    
      

      fs.appendFileSync(outputPath, JSON.stringify(round,null,4)+',' , 'utf-8',)
    
    
    
    
    
    
      //  console.log(`ROUND NUMBER: ${rounds}`);
      //  console.log(`CT : ${ct_score} vs T : ${tr_score}`);
      //  console.log("\n");
    });

    demoFile.gameEvents.on('player_death', e => {
       var roundCount=0;
    
      const attacker = demoFile.entities.getByUserId(e.attacker);
      const victim = demoFile.entities.getByUserId(e.userid);
      const weapon = e.weapon;
      const headshot= e.headshot ? "HS":"";
      const flashAssisted= e.assistedflash ? "Flash Assist!":"No Flash Assist"
      var killLogs=[];
      killLogs.push({
        AttackerLogs:{
        
          attacker:attacker.name,
          weaponUsed:weapon,
          headshotStatus:headshot,
          flashed:flashAssisted,
          victim:victim.name
        }

      })
    
     

      fs.appendFileSync(outputPath, JSON.stringify(killLogs,null,4) + ",", 'utf-8',)
    });

    demoFile.gameEvents.on("player_disconnect", ({ userid }) => {
      const player = demoFile.entities.getByUserId(userid);
      var stats=[]
      if(!player.isFakePlayer){
      
        demoFile.players.forEach((player) => {
           stats.push({
              playerPostMatchStats:{
                team: player.team?.teamName,
                steamId: player.steamId,
                steam64Id: player.steam64Id,
                playerName: player.name,
                kills: player.kills,
                assists: player.assists,
                deaths: player.deaths
              }
             
          })
         
         
        })
        console.table(stats);
          fs.appendFileSync(outputPath, JSON.stringify(stats,null,4) , 'utf-8',)
      
      
      }
   
     
    });
    
    demoFile.parse(buffer);
  })
}















// demoFile.stringTables.on("update", e => {
//   if (e.table.name === "userinfo" && e.userData != null) {
//      console.log("\nPlayer info updated:");
//      console.log(e.entryIndex, e.userData);

//   }
// });








const parseDemosInInput = () => {
  var files = fs.readdirSync(inputDir);
  if (files.length > 0) {
    let path = inputDir + '/' + files[0]
    console.log("Parsing File: " + path);
    parseDemoFile(path)
  } else {
    //Alternative: nothing found, lets wait and check again in 10seconds
    //console.log("Input dir is empty, will try again in 10seconds")
    //setTimeout( () => parseDemosInInput(), 10000);

    console.log("Processed and removed all files in input dir!!!")

  }
}





const inputDir = './demoFile'
const outputPath = './output/output.json'


fs.writeFile(outputPath, "", () => {});
fs.appendFileSync(outputPath, "[", 'utf-8')
console.log("Parsing process has started....")
parseDemosInInput();






