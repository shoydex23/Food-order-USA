var mongoose= require('mongoose');
var express = require('express');
var router = express.Router();
var db = require('../models/customer');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/food_order',{useNewUrlParser: true});

const d= mongoose.connection;

d.on('error',err =>{
  console.log("error connecting to database");
});

d.once('open',()=>{
  console.log("You have connected to database");
})
router.get('/',function(req,res,next){
  db.find(function(err,cust){
    if(err){
      console.log('error !!');
    }
    else{
      console.log(cust);
    }
  });
  });

module.exports = router;
