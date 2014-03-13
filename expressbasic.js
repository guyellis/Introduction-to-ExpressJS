var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.send('hello word!');
});

app.listen(3000);

console.log('Basic Express Server running on port 3000');
