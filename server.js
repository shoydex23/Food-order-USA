const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/food_order',{useNewUrlParser: true});

const db= mongoose.connection;
db.on('error',err =>{
  console.log("error connecting to database");
});

db.once('open',()=>{
  console.log("You have connected to database");
})

app.listen(3000,()=>{
  console.log('app running on port 3000');
})
