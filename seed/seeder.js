const mongoose = require("mongoose");
var db = require("../models/customer");

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/food_order',{useNewUrlParser: true});

const d= mongoose.connection;

d.on('error',err =>{
  console.log("error connecting to database");
});

d.once('open',()=>{
  console.log("You have connected to database");
})

var cust = new db ({
  customerName: 'Utkarsh',
  customerPhone:'35424',
  customerEmail:'abc@gmail.com'
})
var done =0;
cust.save(function(err,result){
  done++;
  if(done === 1){
    console.log(cust);
    exit();
  }
});
function exit(){
mongoose.disconnect();
}
