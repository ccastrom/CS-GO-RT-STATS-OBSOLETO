const express = require('express');
const hudRoute=express.Router();
const mongoQuerys= require('../mongoDB/Querys/mongoQuery');


hudRoute.use(express.static('public'));
hudRoute.use(express.static('views'));
hudRoute.use(express.static('socket_events'));
hudRoute.use(express.static('views/bootstrap'));
hudRoute.use(express.static('node_modules/bootstrap/dist/js'));
hudRoute.use(express.static('node_modules/chart.js/dist'));



hudRoute.get('/', ensureAuthenticated, (req,res)=>{
    
        res.render('hud.ejs')
      
    })



hudRoute.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
    console.log("no autenticado")
  }

  



  






module.exports=hudRoute;