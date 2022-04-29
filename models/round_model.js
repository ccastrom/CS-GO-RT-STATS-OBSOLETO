const mongoose= require('mongoose');

const roundSchema= new mongoose.Schema({
    
    round:String

   
})

module.exports=mongoose.model('Round',roundSchema);