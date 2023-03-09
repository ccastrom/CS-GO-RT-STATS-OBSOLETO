const { default: mongoose } = require('mongoose');
const userDataInGame = require('../../mongoDB/models/userDataIngame')
const mongoQuery= require('../../mongoDB/Querys/mongoQuery')
function jsonPersonal(Map,Player,Round,Weapon,Player_status,Player_match_stats){
    
    const date= new Date();
    let jsonUserData={Usuario:{
        ID:Player._id64,
        Nombre:Player._name,
       
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
            RondasPerdidasConsecutivasT:Map._tconsecutiveroundlosses,
            HistorialDeRondas:Map._roundWins
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
    let lastMatchInfo={
        Usuario:{
            ID:Player._id64,
            Nombre:Player._name,
            fechaDePartida:date
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
                RondasPerdidasConsecutivasT:Map._tconsecutiveroundlosses,
                HistorialDeRondas:Map._roundWins
    
            },
            StatsPlayer:{
                kills:Player_match_stats._kills,
                assists:Player_match_stats._assists,
                deaths:Player_match_stats._deaths,
                mvps:Player_match_stats._mvps,
                score:Player_match_stats._score,
               
            }
    }
    insertInGameData(lastMatchInfo); 
    return jsonUserData;
}

function insertInGameData(JSON){

    if(JSON.Mapa.NombreDeMapa && JSON.Mapa.FaseActual=="gameover"){
        let insertData=mongoQuery.insertInGameData(JSON)
        insertData.then(result=>{
            console.log("All ok: "+result);
        }).catch(err=>{
            console.log("Duplicated")
        })
       
    }
}




module.exports=jsonPersonal;