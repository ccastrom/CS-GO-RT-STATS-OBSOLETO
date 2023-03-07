const { set } = require('express/lib/application');



   class Map{
       
       constructor(mapname,mapmode, phase, round, teamctScore, ctconsecutiveroundlosses, teamTScore, tconsecutiveroundlosses,roundWins) {
           this._mapname=mapname
           this._mapmode = mapmode;
           this._phase = phase;
           this._round = round;
           this._teamctScore = teamctScore;
           this._ctconsecutiveroundlosses = ctconsecutiveroundlosses;
           this._teamTScore = teamTScore;
           this._tconsecutiveroundlosses = tconsecutiveroundlosses;
           this._roundWins = roundWins;
       }
       get mapname() {
        return this._mapname;
    }
        set mapname(in_mapname) {
            this._mapname = in_mapname;
        }

       get mapmode() {
           return this._mapmode;
       }
       set mapmode(in_mapmode) {
           this._mapmode = in_mapmode;
       }

       get phase() {
           return this._phase;
       }
       set phase(in_phase) {
           this._phase = in_phase;
       }

       get round() {
           return this._round;
       }
       set round(in_round) {
           this._round = in_round;
       }

       get teamctScore() {
           return this._round;
       }
       set teamctScore(in_teamctScore) {
           this._teamctScore = in_teamctScore;
       }

       get ctconsecutiveroundlosses() {
           return this._ctconsecutiveroundlosses;
       }
       set ctconsecutiveroundlosses(in_ctconsecutiveroundlosses) {
           this._ctconsecutiveroundlosses = in_ctconsecutiveroundlosses;
       }

       get teamTScore() {
           return this._teamTScore;
       }
       set teamTScore(in_teamTScore) {
           this._teamTScore = in_teamTScore;
       }

       get tconsecutiveroundlosses() {
           return this._tconsecutiveroundlosses;
       }
       set tconsecutiveroundlosses(in_tconsecutiveroundlosses) {
           this._tconsecutiveroundlosses = in_tconsecutiveroundlosses;
       }

        get roundWins() {
           return this._roundWins;
       }
       set roundWins(in_roundWins) {
           this._roundWins = in_roundWins;
       }

        static fillMapInfo(JSON){
        var mapname;
        const mapInfo = new Map();
        try{
            mapname=JSON.map.name;
    
        }catch(error){
            console.log("Fin de la partida");
        }
       
        if(mapname){
            
            var mapmode;
            var phase;
            var round;
            var teamctScore;
            var ctconsecutiveroundlosses;
            var teamTScore;
            var tconsecutiveroundlosses;
            var roundWins=[];
             mapmode=JSON.map.mode;//0
             //1
             phase=JSON.map.phase;//2
             round=JSON.map.round;//3
            
    
    
             teamctScore=JSON.map.team_ct.score;//4
             ctconsecutiveroundlosses=JSON.map.team_ct.consecutive_round_losses;//5
          
        
        
             teamTScore=JSON.map.team_t.score;//6
             
             tconsecutiveroundlosses=JSON.map.team_t.consecutive_round_losses;//7
             roundWins=[JSON.map.round_wins]

             console.log(phase)

            mapInfo._mapname=mapname
            mapInfo._mapmode=mapmode
            mapInfo._phase=phase
            mapInfo._round=round
            mapInfo._teamctScore=teamctScore
            mapInfo._ctconsecutiveroundlosses=ctconsecutiveroundlosses
            mapInfo._teamTScore=teamTScore
            mapInfo._tconsecutiveroundlosses=tconsecutiveroundlosses
            mapInfo._roundWins=roundWins


           
            
            return mapInfo
            
            
            
           
    
          
          
        }else{
            mapInfo._mapname=""
            mapInfo._mapmode=""
            mapInfo._phase=""
            mapInfo._round=""
            mapInfo._teamctScore=""
            mapInfo._ctconsecutiveroundlosses=""
            mapInfo._teamTScore=""
            mapInfo._tconsecutiveroundlosses=""
            mapInfo._roundWins=roundWins=""

            return mapInfo

          
            
           
            
    
        }   
        
       }
       

   }

   
  
    
   
   
   





    


module.exports=Map;