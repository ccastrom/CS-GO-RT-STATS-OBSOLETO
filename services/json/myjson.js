const { default: mongoose } = require('mongoose');
const User = require('../../models/user_model')


function jsonPersonal(idReal,Map,Player,Round,Weapon,Player_status,Player_match_stats){
    
   
    let jsonUserData={Usuario:{
        ID:idReal,
        Nombre:Player[2]
    },
        player_id:{
            Actividad:Player[0],
            Equipo:Player[1],
            Estado:Player[3]
        },
        Mapa:{
            TipoDePartida:Map[0],
            NombreDeMapa:Map[1],
            FaseActual:Map[2],
            RondaActual:Map[3],
            PuntuacionCT:Map[4],
            RondasPerdidasConsecutivasCT:Map[5],
            PuntuacionT:Map[6],
            RondasPerdidasConsecutivasT:Map[7]

        },
        Ronda:{
            EstadoDeBomba:Round[0],
            EquipoGanador:Round[1],
            FaseActual:Round[2]
        },
        Armas:{
            ArmaEquipada:Weapon[0],
            MunicionRestanteArma1:Weapon[1],
            Estado:Weapon[2],
            Arma1:Weapon[3],
            Arma2:Weapon[4],
            Arma3:Weapon[5]
            

        },
        Estado:{
            Vida:Player_status[0],
            Armor:Player_status[1],
            Helmet:Player_status[2],
            defuseKit:Player_status[3],
            flashed:Player_status[4],
            smoked:Player_status[5],
            burning:Player_status[6],
            money:Player_status[7],
            round_kills:Player_status[8],
            round_killsHS:Player_status[9],
            equip_value:Player_status[10],
        },
      
        StatsPlayer:{
            kills:Player_match_stats[0],
            assists:Player_match_stats[1],
            deaths:Player_match_stats[2],
            mvps:Player_match_stats[3],
            score:Player_match_stats[4],
           
        }

        

    }
    
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