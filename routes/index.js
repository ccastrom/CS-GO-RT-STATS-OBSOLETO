const express = require('express');
const ruta=express.Router();



ruta.get('/',(req,res)=>{
    res.render("index.ejs",{name:"Pepe"})
});

module.exports=ruta;