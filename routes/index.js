const { Router } = require('express');
const express = require('express');
const ruta=express.Router();
const User= require('../models/user_model');





ruta.get('/',async(req,res)=>{
   let resultado=selectDataUser();

   
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
