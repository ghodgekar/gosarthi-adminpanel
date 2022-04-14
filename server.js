let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
//     dbConfig = require('./db/database');
// let dbvalue = {db: 'mongodb+srv://surabhi:surabhi30@adminpanel.wre4o.mongodb.net/test'}
// console.log(dbvalue);

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
const app = express();
app.get('/', function(req, res){
res.json({"tutorial" : "Build REST API with node.js"});
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
