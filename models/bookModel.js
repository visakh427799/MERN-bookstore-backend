const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const bookSchema =new Schema({

   bookname:String,
   author:String,
   description:String,
   prize:String,
   date:Date,
   user_id:String,


})
const book=mongoose.model('book',bookSchema);
module.exports = book;