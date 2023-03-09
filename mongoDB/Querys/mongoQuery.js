const steamUserAPIGameData= require('../models/steamUserAPIGameData_model');
const userInGameData= require('../models/userDataIngame');

async function insertInGameData(dataUser){
    let dataObject= new userInGameData({
        user_Data_InGame:dataUser
    })
     return await dataObject.save();
   
}




const insertAPIData=async(jsonData)=>{
    let dataObject= new steamUserAPIGameData({
        steamUser_APIGame_Data:jsonData
    })
    return await dataObject.save();
}

async function findLastRecord(){
    let statsBD= await userInGameData.findOne({}).sort({"_id":-1});
 
    return statsBD;
 
 }

 



module.exports={
    insertInGameData,
    insertAPIData,
    findLastRecord
   
}