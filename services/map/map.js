const { set } = require('express/lib/application');



   class Map{
       
       constructor(mapmode, phase, round, teamctScore, ctconsecutiveroundlosses, teamTScore, tconsecutiveroundlosses) {
           this._mapmode = mapmode;
           this._phase = phase;
           this._round = round;
           this._teamctScore = teamctScore;
           this._ctconsecutiveroundlosses = ctconsecutiveroundlosses;
           this._teamTScore = teamTScore;
           this._tconsecutiveroundlosses = tconsecutiveroundlosses;
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
             mapmode=JSON.map.mode;//0
           //1
             phase=JSON.map.phase;//2
             round=JSON.map.round;//3
            
    
    
             teamctScore=JSON.map.team_ct.score;//4
             ctconsecutiveroundlosses=JSON.map.team_ct.consecutive_round_losses;//5
          
        
        
             teamTScore=JSON.map.team_t.score;//6
             
             tconsecutiveroundlosses=JSON.map.team_t.consecutive_round_losses;//7
            

            mapInfo.mapmode=mapmode
            mapInfo.phase=phase
            mapInfo.round=round
            mapInfo.teamctScore=teamctScore
            mapInfo.ctconsecutiveroundlosses=ctconsecutiveroundlosses
            mapInfo.teamTScore=teamTScore
            mapInfo.tconsecutiveroundlosses=tconsecutiveroundlosses

           
            
            return mapInfo
            
            
            
           
    
          
          
        }else{
            
            mapInfo.mapmode=""
            mapInfo.phase=""
            mapInfo.round=""
            mapInfo.teamctScore=""
            mapInfo.ctconsecutiveroundlosses=""
            mapInfo.teamTScore=""
            mapInfo.tconsecutiveroundlosses=""

            return mapInfo

          
            
           
            
    
        }   
        
       }
       

   }

   
  
    
   
   
   





    


module.exports=Map;