const express = require('express');
const { send } = require('process');

const router = require('./routes')

const app = express();

app.use('/',router)

app.get('/',(req,res)=>{
    res.send("this is home route");
})

app.listen(5000);