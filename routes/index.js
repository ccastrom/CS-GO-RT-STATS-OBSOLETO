const { Router } = require('express');
const express = require('express');
const ruta=express.Router();
const User= require('../models/user_model');





ruta.get('/',(req,res)=>{
    res.render("index.ejs",{name:"Pepe"})
});

ruta.post('/',(req,res)=>{
    let body = req.body;
     let resultado= crearUsuario(body);

        resultado.then( usuario =>{
            res.json({
                valorDocumento: usuario
            })
        }).catch(err =>{
            res.status(400).json({
                error: err
            })
        })
    
    

})

async function crearUsuario(body){
    let usuario= new User({
        ID : body.ID
      

    });
    return await usuario.save();
}


module.exports=ruta;
