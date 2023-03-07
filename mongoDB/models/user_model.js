const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
    
   data:{
    type:Object
   }

   
})

module.exports=mongoose.model('User',userSchema);