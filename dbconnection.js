const express=require('express');
const mongoose=require('mongoose');

const uri = "mongodb+srv://visakhts:427799@cluster0.70uir.mongodb.net/<Bookstore>?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connectedâ€¦")
})
.catch(err => console.log(err));
