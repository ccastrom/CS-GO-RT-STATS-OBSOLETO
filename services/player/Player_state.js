


class Player_status{
    constructor(health, armor, helmet, defusekit, flashed, smoked, burning, money, round_kills, round_killshs, equip_value) {
        this._health = health;
        this._armor = armor;
        this._helmet = helmet;
        this._defusekit = defusekit;
        this._flashed = flashed;
        this._smoked = smoked;
        this._burning = burning;
        this._money = money;
        this._round_kills = round_kills;
        this._round_killshs = round_killshs;
        this._equip_value = equip_value;

    }
    get health() {
        return this._health;
    }
    set health(in_health) {
        this._health = in_health;
    }

    get armor() {
        return this._armor;
    }
    set armor(in_armor) {
        this._armor = in_armor;
    }

    get helmet() {
        return this._helmet;
    }
    set helmet(in_helmet) {
        this._helmet = in_helmet;
    }

    get defusekit() {
        return this._defusekit;
    }
    set defusekit(in_defusekit) {
        this._defusekit = in_defusekit;
    }

    get flashed() {
        return this._flashed;
    }
    set flashed(in_flashed) {
        this._flashed = in_flashed;
    }

    get smoked() {
        return this._smoked;
    }
    set smoked(in_smoked) {
        this._smoked = in_smoked;
    }

    get burning() {
        return this._burning;
    }
    set burning(in_burning) {
        this._burning = in_burning;
    }

    get money() {
        return this._money;
    }
    set money(in_money) {
        this._money = in_money;
    }

    get roundkills() {
        return this._roundkills;
    }
    set roundkills(in_roundkills) {
        this._roundkills = in_roundkills;
    }

    get roundkillshs() {
        return this._roundkillshs;
    }
    set roundkillshs(in_roundkillshs) {
        this._roundkillshs = in_roundkillshs;
    }

    get equipvalue() {
        return this._equipvalue;
    }
    set equipvalue(in_equipvalue) {
        this._equipvalue = in_equipvalue;
    }

    static fill_player_status_info(JSON,map,userID){
        var matchid=JSON.player.steamid;
        var health;
        var armor;
        var helmet;
        var defusekit;
        var flashed;
        var smoked;
        var burning;
        var money;
        var round_kills;
        var round_killhs;
        var equip_value;
        const player_status= new Player_status();
    
        if(map && matchid==userID){
           
            
            health=JSON.player.state.health;
            armor=JSON.player.state.armor;
            helmet=JSON.player.state.helmet;
            defusekit=JSON.player.state.defusekit;
            flashed=JSON.player.state.flashed;
            smoked=JSON.player.state.smoked;
            burning=JSON.player.state.burning;
            money=JSON.player.state.money;
            round_kills=JSON.player.state.round_kills;
            round_killhs=JSON.player.state.round_killhs;
            equip_value=JSON.player.state.equip_value;
    
            player_status._health=health;
            player_status._armor=armor;
            player_status._helmet=helmet;
            player_status._defusekit=defusekit;
            player_status._flashed=flashed;
            player_status._smoked=smoked;
            player_status._burning=burning;
            player_status._money=money;
            player_status._burning=burning;
            player_status._round_kills=round_kills;
            player_status._round_killshs=round_killhs;
            player_status._equip_value=equip_value;

            return player_status;
                
    
        }else{
    
            player_status._health="";
            player_status._armor="";
            player_status._helmet="";
            player_status._defusekit="";
            player_status._flashed="";
            player_status._smoked="";
            player_status._burning="";
            player_status._money="";
            player_status._burning="";
            player_status._round_kills="";
            player_status._round_killshs="";
            player_status._equip_value="";
            return player_status;
        }
    
        
    }


}



 
module.exports=Player_status;