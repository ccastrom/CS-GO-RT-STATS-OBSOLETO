const { Router } = require('express');
const express = require('express');
const ruta=express.Router();
const User= require('../models/user_model');




ruta.use(express.static('views'));
ruta.use(express.static('views/bootstrap'));
ruta.use(express.static('node_modules/bootstrap/dist/js'));
ruta.use(express.static('public/images'));




ruta.get('/',(req,res)=>{
   //let resultado=selectDataUser();
   res.render('index',{user:req.user}); 
});



ruta.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

    
async function  selectDataUser(){
  let usuarios= await User
  .find({
    'data.Usuario.Nombre':'BRAVO SIX'
  })
  .limit(1)
  .select({"data.Usuario.Nombre":1})
  console.log(usuarios);
  return usuarios;
}




module.exports=ruta;
