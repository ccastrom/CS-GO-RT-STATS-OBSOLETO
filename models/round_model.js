const mongoose= require('mongoose');

const roundSchema= new mongoose.Schema({
    
    round:{
        type:Number,
        
        
    },
    kills:{
        type:Number,
       
    }
   

   

   
})


module.exports=mongoose.model('Round',roundSchema);