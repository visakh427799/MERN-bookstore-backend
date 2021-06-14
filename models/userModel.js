const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema =new Schema({

   username:String,
   email:String,
   phone:String,
   password:String,
   date:Date,
   sex:String,


})
const user=mongoose.model('user',userSchema);
module.exports = user;