const steamUserAPIGameData= require('../models/steamUserAPIGameData_model');
const userInGameData= require('../models/userDataIngame');
const botData= require('../models/botSteam_model');

async function insertInGameData(dataUser){
    let dataObject= new userInGameData({
        user_Data_InGame:dataUser
    })
     return await dataObject.save();
   
}

async function insertBotData(botDataInfo){
    let dataObject = new botData({
        botSteamData:botDataInfo
    })

    return await dataObject.save();
}




const insertAPIData=async(jsonData)=>{
    let dataObject= new steamUserAPIGameData({
        steamUser_APIGame_Data:jsonData
    })
    return await dataObject.save();
}
async function findLastAPIRecord(){
    let data= await steamUserAPIGameData.findOne({}).sort({"_id":-1})
    return data;
}

async function findLastRecord(){
    let statsBD= await userInGameData.findOne({}).sort({"_id":-1});
 
    return statsBD;
 
 }

 async function findLastDocumentdByID(documetID){
    let documentBD= await userInGameData.findById(documetID)
    return documentBD;
 }

 



module.exports={
    insertInGameData,
    insertBotData,
    findLastAPIRecord,
    insertAPIData,
    findLastRecord,
    findLastDocumentdByID
   
}