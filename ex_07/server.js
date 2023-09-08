const express = require('express');
const app=express();
var router = express.Router();
var myMERN_module = require('./myMERN_module.js') ;

const fs = require('fs');

const React = require('react');


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.get('/',(req,res)=>{
  
    res.sendFile(__dirname+'/index.html');
});

router.get('/files/:name', function (req, res, next) {
    const result = myMERN_module.read(req.params.name);

    result.then(function(result) {
        res.send(result);
    }
    ).catch(function(err) {
        res.send(err);
    });
    
    
});




router.post('/files/:name', function (req, res, next) {
    const result = myMERN_module.create(req.params.name);
    result.then(function(result) {
        res.send(result);
    }).catch(function(err) {
        res.send(err);
    });
    
  

});


router.put('/files/:name/:content', function (req, res, next) {
    const result = myMERN_module.update(req.params.name, req.params.content);

    result.then(function(result) {
        res.send(result);
    }).catch(function(err) {
        res.send(err);
    });
});

router.delete('/files/:name', function (req, res, next) {
    const result = myMERN_module.delete(req.params.name);

    result.then(function(result) {
        res.send(result);
    }).catch(function(err) {
        res.send(err);
    });});





app.use('/', router);
app.listen(4242,()=>{
    console.log('Server is running on port 4242');
});

