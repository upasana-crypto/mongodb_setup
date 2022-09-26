mongo --host mongo1:27017 --eval
'db= new Mongo("localhost:27017")).getDB("test");
config = {
"id" : "my-mongo-set",
"members" : [
{"id" : 0,
"host" : "mongo1:27017"
},
{"id" : 1,
"host" : "mongo2:27017"
},
{"id" : 2,
"host" : "mongo3:27017"
} 
]
};
rs.initiate(config);'