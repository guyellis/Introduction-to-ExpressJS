// path example: /cutomer/5/path/15
app.get('/customer/:id/path/:num', function(req, res){
    res.send('customer is ' + req.params.id +
        ' num is ' + req.params.num);
});
