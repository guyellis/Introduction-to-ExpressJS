var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var data = require('./models/dataman.js');
var tree = require('./routes/tree');

var app = express();

// all environments
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/sample.html', function(req, res) {
    res.send('root sample');
});


app.get('/', routes.index);
app.get('/users', user.list);

app.get('/customer/:id/path/:num', function(req, res){
    res.send('customer is ' + req.params.id +
        ' num is ' + req.params.num);
});
app.get('/cust', function(req, res){
    res.send('cust is ' + req.query['id'] +
        ' num is ' + req.query['num']);
});

app.get(/^\/range\/(\d+)(?:\.\.(\d+))?$/, function(req, res) {
    var from = req.params[0];
    var to = req.params[1];
    res.send('Range: ' + from + ' to ' + to);
});

app.get('/tree/create', tree.create);

app.get('/tree', tree.index);

app.post('/tree', tree.createTree);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
