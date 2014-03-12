var data = require('../models/dataman');

exports.create = function(req,res){
    res.render('tree/create');
};

exports.index = function(req,res){
    data.read(function(err, trees) {
        res.render('tree', {trees: trees});
    });
};

exports.createTree = function(req,res){
    data.create(req.body, function(err) {
        data.read(function(err, trees) {
            res.render('tree', {trees: trees});
        });
    });
};