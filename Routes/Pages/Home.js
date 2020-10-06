const express = require('express');
const Router = express.Router();

Router.get('/', (req,res,next)=>{
  res.render('Pages/Home');
})

module.exports = Router; 