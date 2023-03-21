const fs = require("fs");

const mongoose= require('mongoose');
const mongoQuery=require('../mongoDB/Querys/mongoQuery')

mongoose.connect("mongodb+srv://ccastrom:123@csgo.hws0u.mongodb.net/stats?retryWrites=true&w=majority"
).then(()=>console.log("DB CONNECTION SUCCESS")).catch((err)=>{
    console.log(err);
});


fs.readFile('./output/output.json',"utf8",(err,data)=>{
    if (err) {
        console.error(err);
        return;
      }
     var document=data
    //var documentFixed=document.slice(0,-1);
     console.log(JSON.parse(document));

     var insertData=mongoQuery.insertDemoData(JSON.parse(document));
     insertData.then(result=>{
        console.log(result);
    }).catch(err=>{
      console.log(err)
    })
  })

 