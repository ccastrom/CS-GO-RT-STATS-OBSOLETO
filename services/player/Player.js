
class Player{
    constructor(id64, team, name, status) {
        
        this._id64 = id64;
        this._team = team;
        this._name = name;
        this._status = status;
    }
   

    get id64() {
        return this._id64;
    }
    set id64(in_id64) {
        this._id64 = in_id64;
    }

    get team() {
        return this._team;
    }
    set team(in_team) {
        this._team = in_team;
    }

    get name() {
        return this._name;
    }
    set name(in_name) {
        this._name = in_name;
    }

    get status() {
        return this._status;
    }
    set status(in_status) {
        this._status = in_status;
    }



    static fillPlayerInfo(JSON,Map,id64){
        
        const player_info = new Player();
        var matchid64=JSON.player.steamid;
        
        var activity=JSON.player.activity;
        var team;
        var name;
        var status;
    
        
        
       
    
        if(Map){
             //console.log("====PARTIDA EN CURSO====");
            if(id64==matchid64){
                // console.log("====JUGADOR VIVO====");
                 team=JSON.player.team
                 name=JSON.player.name;
                 status="Vivo"
                //  console.log("Equipo actual: "+team);
                //  console.log(name);
                //  console.log(status);

                 player_info._id64=id64;
                 player_info._team=team;
                 player_info._name=name;
                 player_info._status=status;
                
                 return player_info;
                
            }else{
               
                team=JSON.player.team;
                player_info._id64=id64;
                player_info._team=team;
                player_info._name=name;
                player_info._status=status;
                // console.log("Jugador muerto");
                status="Muerto";
                return player_info;
               
            }
           
        }else{
           
            player_info._id64="";
            player_info._team="";
            player_info._name="";
            player_info._status="";

            return player_info;
            
            
        }
      
    }




}





module.exports=Player;