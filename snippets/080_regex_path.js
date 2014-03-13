// path example: /range/80..160
app.get(/^\/range\/(\d+)(?:\.\.(\d+))?$/, function(req, res) {
    var from = req.params[0];
    var to = req.params[1];
    res.send('Range: ' + from + ' to ' + to);
});