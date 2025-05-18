const express = require('express');
const router = require('./Routes/url');
const path = require('path');
const res = require('express/lib/response');
const app=express();
const port =2828;
app.use(express.json());

app.use(express.static('View')); 
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'View','ui.html'))
});
app.use('/url',router);
app.listen(port,()=>{
    console.log(`Server Running at http://localhost:${port}`);
});