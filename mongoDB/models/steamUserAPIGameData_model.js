const mongoose= require('mongoose');

const steamUserAPIGameDataSchema= new mongoose.Schema({
    
    steamUserAPIGameData:{
        type:Object
         
    },
    
   

   

   
})


module.exports=mongoose.model('steamUserAPIGameData',steamUserAPIGameDataSchema);