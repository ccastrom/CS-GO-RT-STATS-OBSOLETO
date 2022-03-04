const express = require('express');
const ruta=express.Router();
const User= require('../models/user_model');

ruta.use(express.static('public'));
ruta.get('/',(req,res)=>{
    res.render("hud.ejs",{name:"Pepe"})
});








module.exports=ruta;