const mongoose= require('mongoose');

const round_kills_Schema= new mongoose.Schema({
    
   
    kills:{
        type:Number,
        
    }
   

   

   
})


module.exports=mongoose.model('Round_kills',round_kills_Schema);