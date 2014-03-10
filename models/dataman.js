// Bring Mongoose into the app
var mongoose = require( 'mongoose' );

// Build the connection string
var dbURI = 'mongodb://localhost/test';

// Create the database connection
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('open', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

var orchardSchema = mongoose.Schema({
    tree: String,
    quantity: Number
});

var Orchard = mongoose.model('Tree', orchardSchema);

exports.create = function(tree,cb) {
    var orchard = new Orchard(tree);
    orchard.save(function (err) {
        if (err) {
            console.log('error saving tree');
        }
        cb(err);
    });
}

exports.read = function(cb) {
    Orchard.find(function (err, trees) {
        if (err) {
            console.log('error getting trees');
        }
        // mongoose.connection.close();
        cb(err, trees);
    });
}
