'use strict';

const { use } = require('chai');
const mongoose = require('mongoose');
require('dotenv').config({silent: true, path: `${__dirname}/.env`});

var server = require('./app');
var port = 3400;

console.log(`Running on ${process.env.BASE_PATH}:${port}, connecting to ${process.env.MONGO_URL}`)

const options = {
        user: 'user',
        pass: 'password',
        autoIndex: false, // Don't build indexes
        poolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect('${process.env.MONGO_URL}',options);//function (ignore, connection) {
    //connection.onOpen();
    //server.listen(port, function () {
     //   console.log('Server running on port: %d', port);
    //});
//});
