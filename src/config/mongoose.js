
const mongoose = require('mongoose');

module.exports = async function () {
    
    mongoose.Promise = global.Promise; 
    const MONGO_DB = process.env.DB_HOST;

    try {
        const db = await mongoose.connect(MONGO_DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,  
            useFindAndModify: false
        });
        mongoose.connection.on('error', function (err) {
            console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
        }).on('open', function () {
            console.log('Connection extablised with MongoDB')
        })
        return db;
    } catch (error) {
        console.info(`
            Mongo DB Host not found! ${MONGO_DB}
            please add DB_HOST environment variable to .env file ${error}
            exiting...
        `)
        process.exit(1)
    }
};
