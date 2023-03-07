const { Router } = require('express');
const express = require('express');
const indexRoute=express.Router();





indexRoute.use(express.static('views'));
indexRoute.use(express.static('views/bootstrap'));
indexRoute.use(express.static('node_modules/bootstrap/dist/js'));
indexRoute.use(express.static('public/images'));




indexRoute.get('/',(req,res)=>{
   res.render('index'); 
});



indexRoute.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

    





module.exports=indexRoute;
