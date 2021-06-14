const express = require('express')
const cors    = require('cors')
const app     = express()
const PORT    = 8000 || process.env.PORT
const router  = require('./routes/router');
require('./dbconnection')

app.use(cors())
app.use(express.json())
app.use(router)


app.listen(PORT,(err)=>{
    if(!err) console.log("Server listening..");

})