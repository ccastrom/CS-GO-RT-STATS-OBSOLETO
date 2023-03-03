const mongoose= require('mongoose');

const roundSchema= new mongoose.Schema({
    
   
    actual_round:{
        type:Number,
        
    }
   

   

   
})


module.exports=mongoose.model('Round',roundSchema);