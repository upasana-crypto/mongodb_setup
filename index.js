const { MongoClient } = require("mongodb");
var cron = require('node-cron');

// Connection URI
const uri = "mongodb://localhost:27017/test";
// Create a new MongoClient
const client = new MongoClient(uri, { directConnection: true });
cron.schedule('*/5 * * * * *', function(){
    async function run() {
        try {
            // Connect the client to the server
            await client.connect();
            // Establish and verify connection
            await client.db("test").command({ ping: 1 });
            console.log("Connected successfully to server");
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }

    run().catch(console.dir);
})