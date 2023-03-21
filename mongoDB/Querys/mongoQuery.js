const steamUserAPIGameData= require('../models/steamUserAPIGameData_model');
const userInGameData= require('../models/userDataIngame');
const botData= require('../models/botSteam_model');
const demoData= require('../models/demoData_model');

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

async function insertDemoData(dataJson){
   let dataObject= new demoData({
    demo_Data:dataJson
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

async function findLastDemoFileRecord(){
    let statsBD= await demoData.findOne({}).sort({"_id":-1});
 
    return statsBD;
 
 }

 async function findLastDemoFileRecordByID(documentID){
    let documentBD= await demoData.findById(documentID)
    return documentBD;
 }

 async function findLastBotDocumentdByID(documentID){
    let documentBD= await botData.findOne().select({"botSteamData.roundstatsall":{
        "$slice":-1}
    })
     
       
    return documentBD;
 }

 



module.exports={
    insertInGameData,
    insertBotData,
    insertDemoData,
    findLastAPIRecord,
    insertAPIData,
    findLastDemoFileRecord,
    findLastDemoFileRecordByID,
    findLastBotDocumentdByID
   
}