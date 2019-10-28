const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://dbadmin:ihbsV7p2YCNHS5hy@cluster0-c2hl5.gcp.mongodb.net/test?retryWrites=true&w=majority', {userMongoClient: true});

mongoose.connection.on('connected', () => {
    console.log('Database connection success!')
});

mongoose.connection.on('error', (err) => {
    console.log('Database connections error' + err);
});

mongoose.connection.on('disconnect', () => {
    console.log('Disconnected from database');
});