const { json } = require('express');
const ActualRound = require('../../mongoDB/models/round_model')

class Player_match_stats{
    constructor(kills, assists, deaths, mvps, score) {

        this._kills = kills;
        this._assists = assists;
        this._deaths = deaths;
        this._mvps = mvps;
        this._score = score;

    }
    get kills() {
        return this._kills;
    }
    set kills(in_kills) {
        this._kills = in_kills;
    }

    get assists() {
        return this._assists;
    }
    set assists(in_assists) {
        this._assists = in_assists;
    }

    get deaths() {
        return this._deaths;
    }
    set deaths(in_deaths) {
        this._deaths = in_deaths;
    }

    get mvps() {
        return this._mvps;
    }
    set mvps(in_mvps) {
        this._mvps = in_mvps;
    }

    get score() {
        return this._score;
    }
    set score(in_score) {
        this._score = in_score;
    }

    static fill_player_match_stats(JSONData,map,idPlayer,round){
        var kills;
        var assists;
        var deaths;
        var mvps;
        var score;

        
        const player_match_stats= new Player_match_stats();
       
        
       
        
        var matchid=JSONData.player.steamid;
    
        if(map && matchid==idPlayer){
            kills=JSONData.player.match_stats.kills;
            assists=JSONData.player.match_stats.assists;
            deaths=JSONData.player.match_stats.deaths;
            mvps=JSONData.player.match_stats.mvps;
            score=JSONData.player.match_stats.score;
    
            player_match_stats._kills=kills;
            player_match_stats._assists=assists;
            player_match_stats._deaths=deaths;
            player_match_stats._mvps=mvps;
            player_match_stats._score=score;
           

        //    let myObject= {
        //         roundValues:round,
        //         playerKills:player_match_stats.kills
        //    }
           
            // let createRecord=insertActualRoundAndKills(myObject);

            // createRecord.then(recordValue=>{
            //     console.log("all ok")
            // }).catch(err=>{
            //     console.log("error")
            // })
          
           
            return player_match_stats;
            
    
        }
           
        else{
            player_match_stats._kills="";
            player_match_stats._assists="";
            player_match_stats._deaths="";
            player_match_stats._mvps="";
            player_match_stats._score="";
            return player_match_stats;
        }
        
    
    }

}



// async function insertActualRoundAndKills(jsonObject){
   
//     const roundValue= new ActualRound({
//         MyData:jsonObject
     
//     })
 
//     const resultado= await roundValue.save()
        

   
// }




module.exports=Player_match_stats;