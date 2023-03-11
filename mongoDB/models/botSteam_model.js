const mongoose= require('mongoose');

const botSteamDataSchema= new mongoose.Schema({
    
    botSteamData:{
        type:Object
         
    },
    
   

   

   
})


module.exports=mongoose.model('botSteamData',botSteamDataSchema);