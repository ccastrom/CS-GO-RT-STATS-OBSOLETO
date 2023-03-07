const dataAPI= require('../models/steamUserAPIGameData_model');

const insertAPIData=async(jsonData)=>{
    let dataObject= new dataAPI({
        steamUserAPIGameData:jsonData
    })
    return await dataObject.save();
}



const getRoundKills=async()=>{
    let round_kills= await roundKillsBD.find({}).sort({"_id":-1})
    return round_kills;
}


async function findLastRecord(){
    let statsBD= await ActualRound.find().sort({_id:1});
 
    return statsBD;
 
 }



module.exports={
    insertAPIData,
    getRoundKills,
    findLastRecord
}