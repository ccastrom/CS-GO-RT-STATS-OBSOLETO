const mongoose= require('mongoose');

const roundSchema= new mongoose.Schema({
    
    steamUserAPIGameData:{
        type:Object,
         
    },
    
   

   

   
})


module.exports=mongoose.model('steamUserAPIGameData',roundSchema);