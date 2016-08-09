var mongodb = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';
var db = null;

exports.ObjectID = require('mongodb').ObjectID;
exports.connect = function(callback){
    mongodb.connect(url, function(err, _db) {
        exports.db = _db;

        if (err == null) {
            console.log("MongoDB - Connected correctly to server.");
            callback(db);
        }
        else {
            console.log("MongoDB - something went wrong.");
            callback(null);
        }
    });
}

exports.db = db;