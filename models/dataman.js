var mongoose = require('mongoose');

var Orchard = mongoose.model('Tree',
    {
        tree: String,
        quantity: Number
    });

exports.create = function(data) {
    mongoose.connect('mongodb://localhost/test');

    var orchard = new Orchard(data);
    orchard.save(function (err) {
        if (err) {
            console.log('error saving orchard');
        }
        mongoose.connection.close();
    });
}

exports.read = function() {
    mongoose.connect('mongodb://localhost/test');

    var orchard = new Orchard();
    orchard.find(function (err, data) {
        if (err) {
            console.log('error getting trees');
        }
        mongoose.connection.close();
        return data;
    });
}