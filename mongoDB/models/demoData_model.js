const mongoose= require('mongoose');

const DemoDataSchema= new mongoose.Schema({
    
    demo_Data:{
        type:Object,
        gameDate:Date
         
    },
    
   

   

   
})


module.exports=mongoose.model('demo_Data',DemoDataSchema);