const mongoose= require('mongoose');

const roundSchema= new mongoose.Schema({
    
    round:{
        type:Number,
        unique:true,
        
    },
    kills:{
        type:Number,
        unique:true,
    }
   

   

   
})


module.exports=mongoose.model('Round',roundSchema);