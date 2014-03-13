// example path: /cust?id=5&num=15
app.get('/cust', function(req, res){
    res.send('cust is ' + req.query['id'] +
        ' num is ' + req.query['num']);
});
