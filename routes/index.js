const { Router } = require('express');
const express = require('express');
const ruta=express.Router();
const User= require('../models/user_model');





ruta.get('/',async(req,res)=>{
   //let resultado=selectDataUser();
   res.render('index', { user: req.user });

   
});

ruta.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
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

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
  console.log("no autenticado")
}


module.exports=ruta;
