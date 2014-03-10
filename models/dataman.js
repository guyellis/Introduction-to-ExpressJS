var mongoose = require('mongoose');

var orchardSchema = mongoose.Schema({
    tree: String,
    quantity: Number
});

var Orchard = mongoose.model('Tree', orchardSchema);

exports.create = function(tree) {
    mongoose.connect('mongodb://localhost/test');

    var orchard = new Orchard(tree);
    orchard.save(function (err) {
        if (err) {
            console.log('error saving tree');
        }
        mongoose.connection.close();
    });
}

exports.read = function(cb) {
    mongoose.connect('mongodb://localhost/test');

    // var orchard = new Orchard();
    //console.log('dataman.js read');
    Orchard.find(function (err, trees) {
        //console.log('read find');
        if (err) {
            console.log('error getting trees');
        }
        // console.dir(trees);
        mongoose.connection.close();
        cb(err, trees);
    });
}
