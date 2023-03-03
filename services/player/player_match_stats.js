const ActualRound = require('../../models/round_model')

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

}

function fill_player_match_stats(JSON,map,round,idPlayer){
    var kills;
    var assists;
    var deaths;
    var mvps;
    var score;
    const player_match_stats= new Player_match_stats();
    var vPlayer_match_stats=[];
    
   
    
    var matchid=JSON.player.steamid;

    if(map && matchid==idPlayer){
        kills=JSON.player.match_stats.kills;
        assists=JSON.player.match_stats.assists;
        deaths=JSON.player.match_stats.deaths;
        mvps=JSON.player.match_stats.mvps;
        score=JSON.player.match_stats.score;

        player_match_stats._kills=kills;
        player_match_stats._assists=assists;
        player_match_stats._deaths=deaths;
        player_match_stats._mvps=mvps;
        player_match_stats._score=score;

       
        //insertActualRoundAndKills(actualRound,kills);
        return player_match_stats;
        

    }else if(map && JSON.previously && JSON.previously.player.steamid==idPlayer) {
        
            kills=JSON.previously.player.match_stats.kills;
            assists=JSON.previously.player.match_stats.assists;
            deaths=JSON.previously.player.match_stats.deaths;
            mvps=JSON.previously.player.match_stats.mvps;
            score=JSON.previously.player.match_stats.score;

            player_match_stats._kills=kills;
            player_match_stats._assists=assists;
            player_match_stats._deaths=deaths;
            player_match_stats._mvps=mvps;
            player_match_stats._score=score;
            
           
            //insertActualRoundAndKills(actualRound,kills);
            return player_match_stats;
            

      
       
    }else{
        player_match_stats._kills="";
        player_match_stats._assists="";
        player_match_stats._deaths="";
        player_match_stats._mvps="";
        player_match_stats._score="";
        return vPlayer_match_stats;
    }
    

}

// async function insertActualRoundAndKills(actualRound,actualKills){
//     const roundValue= new ActualRound({
//       round:actualRound,
//       kills:actualKills
//     })
 
//     const resultado= await roundValue.save(function(err){
//         if(err){
//             console.log("registro duplicado");
//         }
//     });
   
// }


module.exports=Player_match_stats;