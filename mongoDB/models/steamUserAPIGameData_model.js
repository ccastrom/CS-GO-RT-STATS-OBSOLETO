const mongoose= require('mongoose');

const steamUserAPIGameDataSchema= new mongoose.Schema({
    
    steamUser_APIGame_Data:{
        type:Object
         
    },
    
   

   

   
})


module.exports=mongoose.model('steamUserAPIGameData',steamUserAPIGameDataSchema);