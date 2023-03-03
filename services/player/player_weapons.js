 class Player_weapons{
     constructor(actual_weapon, weapon_1_ammo, weapon_2_ammo) {
         this._actual_weapon = actual_weapon;
         this._weapon_1_ammo = weapon_1_ammo;
         this._weapon_2_ammo = weapon_2_ammo;

     }
     get actualweapon() {
         return this._actualweapon;
     }
     set actualweapon(in_actualweapon) {
         this._actualweapon = in_actualweapon;
     }

     get weapon1ammo() {
         return this._weapon_1_ammo;
     }
     set weapon1ammo(in_weapon_1_ammo) {
         this._weapon_1_ammo = in_weapon_1_ammo;
     }

     get weapon2ammo() {
         return this._weapon2ammo;
     }
     set weapon2ammo(in_weapon2ammo) {
         this._weapon2ammo = in_weapon2ammo;
     }
     static fill_player_weapons_info(JSON,map,userID){
        var matchid=JSON.player.steamid;
        var knife;
        var knife_state;
        var weapon_1;
        var weapon_1_state;
        var weapon_2;
        var weapon_2_state;
        var weapon_1_ammo;
        var weapon_2_ammo;
        var actual_weapon;

        const player_weapons= new Player_weapons();
       
       if(map && userID==matchid){
        try {
             knife= JSON.player.weapons.weapon_0.name;
             knife_state=JSON.player.weapons.weapon_0.state;
             weapon_1=JSON.player.weapons.weapon_1.name;
             weapon_1_state=JSON.player.weapons.weapon_1.state;
             weapon_2=JSON.player.weapons.weapon_2.name;
             weapon_2_state=JSON.player.weapons.weapon_2.state;
           
    
            
        } catch (error) {
          
        }
        if(knife){
            if(knife_state=="active"){
                player_weapons._actual_weapon=knife

                // console.log(player_weapons._actual_weapon)
            }
        }
        if(weapon_1){
            if(weapon_1_state=="active"){
               
                weapon_1_ammo=JSON.player.weapons.weapon_1.ammo_clip;
               
                actual_weapon=weapon_1;
                player_weapons._actual_weapon=weapon_1;
                player_weapons._weapon_1_ammo=weapon_1_ammo;
                // console.log("Arma 1: "+player_weapons._actual_weapon)
                // console.log("Ammo arma 1: "+player_weapons._weapon_1_ammo)
            }
         
        }
        if(weapon_2){
            if(weapon_2_state=="active"){
              
                weapon_2_ammo=JSON.player.weapons.weapon_2.ammo_clip;
               
    
                actual_weapon=weapon_2;
                player_weapons._actual_weapon=weapon_2;
                player_weapons._weapon_2_ammo=weapon_2_ammo;
                // console.log("Arma 2: "+player_weapons._actual_weapon)
                // console.log("Ammo arma 2: "+player_weapons._weapon_2_ammo)
            }
           
        }
      
       
        return player_weapons;
        
      
       }else{
            player_weapons._actual_weapon="";
            player_weapons._weapon_1_ammo="";
            player_weapons._weapon_2_ammo="";
        }
         return player_weapons;
    
       }
    }

 


module.exports=Player_weapons;