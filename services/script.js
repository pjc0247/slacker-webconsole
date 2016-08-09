var mongo = require('../mongo');

exports.get_hook_list = function(callback){
    var db = mongo.db;
    var cursor = db.collection('hooks').find();

    cursor.toArray(function(err, docs){
       callback(err, docs); 
    });
}
exports.get_hook = function(name, callback){
    var db = mongo.db;
    var doc = db.collection('hooks').findOne(
        {"name" : name});

    callback(null, doc);
}
exports.create_hook = function(name, callback){
    var db = mongo.db;

    db.collection('hooks')
        .insertOne(
            {"name" : name, "src" : ""},
            function(err, result) {
                callback(err);
            });
}
exports.update_hook = function(doc, callback){
    var db = mongo.db;

    db.collection('hooks')
        .updateOne(
            {"_id" : new mongo.ObjectID(doc.id)},
            {"$set" : {
                "name" : doc.name,
                "src" : doc.src,
                "regex" : doc.regex
            }},
            function(err, result) {
                callback(err);
            });
}
