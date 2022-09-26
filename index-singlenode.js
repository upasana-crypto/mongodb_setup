var MongoClient = require('mongodb').MongoClient;
var url = "localhost:27017";
var cron = require('node-cron');

cron.schedule('*/5 * * * * *', function(){
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("admin"); //db name
    dbo.collection("new").count(function(err, result) { // collection name
        if (err) throw err;
        console.log("db is up and running: count : "+ result);
        db.close();
    });
    });
})
