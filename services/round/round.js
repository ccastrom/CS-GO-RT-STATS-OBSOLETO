 class Round{
     constructor(bombStatus, winTeam,phase ) {
        this._bombStatus = bombStatus;
        this._winTeam = winTeam;
        this._phase = phase;
     }

     get bombStatus() {
        return this._bombStatus;
    }
    set bombStatus(in_bombStatus) {
        this._bombStatus = in_bombStatus;
    }

    get winTeam() {
        return this._winTeam;
    }
    set winTeam(in_winTeam) {
        this._winTeam = in_winTeam;
    }

     get phase() {
         return this._phase;
     }
     set phase(in_phase) {
         this._phase = in_phase;
     }
     static fillRoundInfo(JSON,map){
        var bombStatus;
        const round = new Round();
       if(map){
           var win_team;
           var bomb;
           var phase=JSON.round.phase;
            win_team=JSON.round.win_team;
            bomb=JSON.round.bomb;
           if(!bomb){
               bombStatus="No plantada"; 
               round._bombStatus=bombStatus;
           }else{
                round._bombStatus=bomb; //0
           }
           if(win_team){
            round._winTeam=win_team //1
           }
           round._phase=phase; //2
           return round;
       }else{
           round._bombStatus=""
           round._winTeam=""
           round._phase=""
           return round;
           
   
       }
      
   }

 }





module.exports=Round;