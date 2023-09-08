const express= require('express');
const app=express();

const React = require('react');




app.get('/',(req,res)=>{
  
    res.sendFile(__dirname+'/index.html');
});

app.listen(4242,()=>{
    console.log('Server is running on port 4242');
});