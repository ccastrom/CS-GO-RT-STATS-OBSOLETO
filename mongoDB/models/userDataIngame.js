const mongoose= require('mongoose');

const userDataInGameSchema= new mongoose.Schema({
    
   user_Data_InGame:{
    type:Object,
    unique:true
   }
  

   
})

module.exports=mongoose.model('userDataInGame',userDataInGameSchema);