var mongoose = require('mongoose');

exports.save = function(data) {
    mongoose.connect('mongodb://localhost/test');

    var Orchard = mongoose.model('Tree',
        {
            tree: String,
            quantity: Number
        });

    var orchard = new Orchard(data);
    orchard.save(function (err) {
        if (err) {
            console.log('error saving orchard');
        }
        mongoose.connection.close();
    });
}
