const mongoose= require('mongoose');

const roundSchema= new mongoose.Schema({
    
    round:Number,
    kills:Number
   

   
})

module.exports=mongoose.model('Round',roundSchema);