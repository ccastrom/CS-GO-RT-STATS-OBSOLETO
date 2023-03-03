
class Player{
    constructor(id, team, name, status) {
        
        this._id = id;
        this._team = team;
        this._name = name;
        this._status = status;
    }
   

    get id() {
        return this._id;
    }
    set id(in_id) {
        this._id = in_id;
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



    static fillPlayerInfo(JSON,id,Map){
        
        const player = new Player();
        var matchid=JSON.player.steamid;
        var activity=JSON.player.activity;
        var team;
        var name;
        var status;
    
        
        
       
    
        if(Map[1]){
            // console.log("====PARTIDA EN CURSO====");
            if(id==matchid){
                // console.log("====JUGADOR VIVO====");
                 team=JSON.player.team
                 name=JSON.player.name;
                 status="Vivo"
                // console.log("Equipo actual: "+team);
                // console.log(name);
                // console.log(status);

                player.id=id;
                player.team=team;
                player.name=name;
                player.status=status;
                
                 return player;
                
            }else{
               
                team=JSON.player.team;
                player.id=id;
                player.team=team;
                player.name=name;
                player.status=status;
                // console.log("Jugador muerto");
                status="Muerto";
                return player;
               
            }
           
        }else{
           
            player.id="";
            player.team="";
            player.name="";
            player.status="";

            return player;
            
            
        }
      
    }




}





module.exports=Player;