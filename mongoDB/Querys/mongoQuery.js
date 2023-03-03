const roundKillsBD= require('../models/round_kills_model');

const getRoundKills=async()=>{
    let round_kills= await roundKillsBD.find({}).sort({"_id":-1})
    return round_kills;
}



module.exports={
    getRoundKills
}