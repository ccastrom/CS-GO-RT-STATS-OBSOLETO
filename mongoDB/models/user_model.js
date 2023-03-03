const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
    
    data:Object

   
})

module.exports=mongoose.model('User',userSchema);