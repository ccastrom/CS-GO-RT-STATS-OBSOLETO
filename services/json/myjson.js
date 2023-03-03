const { default: mongoose } = require('mongoose');
const User = require('../../models/user_model')


function jsonPersonal(Map,Player,Round,Weapon,Player_status,Player_match_stats){
    
   
    let jsonUserData={Usuario:{
        ID:Player._id64,
        Nombre:Player._name
    },
        player_id:{
            Equipo:Player._team,
            Estado:Player._status
        },
        Mapa:{
            NombreDeMapa:Map._mapname,
            TipoDePartida:Map._mapmode,
            FaseActual:Map._phase,
            RondaActual:Map._round,
            PuntuacionCT:Map._teamctScore,
            RondasPerdidasConsecutivasCT:Map._ctconsecutiveroundlosses,
            PuntuacionT:Map._teamTScore,
            RondasPerdidasConsecutivasT:Map._tconsecutiveroundlosses

        },

        StatsPlayer:{
            kills:Player_match_stats._kills,
            assists:Player_match_stats._assists,
            deaths:Player_match_stats._deaths,
            mvps:Player_match_stats._mvps,
            score:Player_match_stats._score,
           
        },
        Ronda:{
            EstadoDeBomba:Round._bombStatus,
            EquipoGanador:Round._winTeam,
            FaseActual:Round._phase
        },
        Armas:{
            ArmaEquipada:Weapon._actual_weapon,
            MunicionRestanteArma1:Weapon._weapon_1_ammo,
            MunicionRestanteArma2:Weapon._weapon_2_ammo,
            

        },
        Estado:{
            Vida:Player_status._health,
            Armor:Player_status._armor,
            Helmet:Player_status._helmet,
            defuseKit:Player_status._defusekit,
            flashed:Player_status._flashed,
            smoked:Player_status._smoked,
            burning:Player_status._burning,
            money:Player_status._money,
            round_kills:Player_status._round_kills,
            round_killsHS:Player_status._round_killshs,
            equip_value:Player_status._equip_value,
        },
      
       

        

    }
    console.log(jsonUserData)
    
    if(jsonUserData.Mapa.NombreDeMapa){
        insertDataUser(jsonUserData);
    }
  
  
   
    //console.log(jsonUserData);
    return jsonUserData;
}

async function insertDataUser(dataUser){
    const user= new User({
      data:dataUser
    })
    const resultado= await user.save();
   
}
module.exports=jsonPersonal;