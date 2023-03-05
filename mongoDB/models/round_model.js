const mongoose= require('mongoose');

const roundSchema= new mongoose.Schema({
    
    roundKills:{
        type:Number,
         
    },
    
   

   

   
})


module.exports=mongoose.model('Round',roundSchema);