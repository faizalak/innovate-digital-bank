'use strict';

const { use } = require('chai');
const mongoose = require('mongoose');
require('dotenv').config({silent: true, path: `${__dirname}/.env`});

var server = require('./app');
var port = 3400;

// environment variables for mongodb connection
const MONGODB_REPLICA_HOSTNAMES = process.env.MONGODB_REPLICA_HOSTNAMES
const MONGODB_REPLICA_SET = process.env.MONGODB_REPLICA_SET
const MONGODB_DBNAME = process.env.MONGODB_DBNAME
const MONGODB_AUTH_DBNAME = process.env.MONGODB_AUTH_DBNAME || MONGODB_DBNAME
const MONGODB_CA_PATH = process.env.MONGODB_CA_PATH
const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD

//console.log(`Running on ${process.env.BASE_PATH}:${port}, connecting to ${process.env.MONGO_URL} and mongo host `+MONGODB_REPLICA_HOSTNAMES)

// connection to mongodb
mongoose
    .connect('mongodb://' + MONGODB_REPLICA_HOSTNAMES + '/', {
        user: MONGODB_USER,
        pass: MONGODB_PASSWORD,
        //dbName: MONGODB_DBNAME,
        //replicaSet: MONGODB_REPLICA_SET,
        authSource: MONGODB_AUTH_DBNAME
        //tls: false,
        //tlsCAFile: MONGODB_CA_PATH,
        //useCreateIndex: true,
        //useNewUrlParser: true,
       //useUnifiedTopology: true
            })
    .catch(error => {
        console.log('mongodb://' + MONGODB_REPLICA_HOSTNAMES + '/' +
            ' user:'+ MONGODB_USER +
            ' pass:' + MONGODB_PASSWORD +
            ' authSource:' + MONGODB_AUTH_DBNAME + '\n' + error)
        process.exit(1)
    });

//mongoose.connect('${process.env.MONGO_URL}', {}
//function (ignore, connection) {
    //connection.onOpen();
    //server.listen(port, function () {
     //   console.log('Server running on port: %d', port);
    //});
//});
