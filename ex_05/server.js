const express = require('express');
const app=express();
var router = express.Router();
const fs = require('fs');

const React = require('react');

app.get('/',(req,res)=>{
  
    res.sendFile(__dirname+'/index.html');
});

router.get('/name/:name?', function (req, res, next) {
    fs.readFile('./name.html',"utf8",(err, data) => {
        
        if (err) {
            console.error(err)
            return
        }
        if(req.params.name === undefined) {
            req.params.name = 'unknown';
        }
        let  age='';

        if(req.query.age === undefined) {
             age = ', i dont know your age';
        } else {
             age = `, you have ${req.query.age} yo`;
        }

        res.send(data.replace('{{nom}}',req.params.name).replace('{{age}}',age));
    });
});
app.use('/', router);
app.listen(4242,()=>{
    console.log('Server is running on port 4242');
});