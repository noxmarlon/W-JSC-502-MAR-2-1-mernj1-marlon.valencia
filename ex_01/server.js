const express= require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello world');
});
app.listen(4242,()=>{
    console.log('Server is running on port 4242');
});