let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./db/database');

console.log(dbConfig);

// Connecting mongoDB
// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.db, {
//     useNewUrlParser: true
// }).then(() => {
//         console.log('Database connected')
//     },
//     error => {
//         console.log('Database could not be connected : ' + error)
//     }
// )
