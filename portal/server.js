'use strict';
require('dotenv').config({silent: true, path: `${__dirname}/.env`});
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const mongostore = require('connect-mongo')(session);
const request = require('request');

const config = require(`${__dirname}/config`)[process.env.NODE_ENV];

let mongoUrl = process.env.NODE_ENV
if (process.env.TOOLCHAIN_FLAG==="active") mongoUrl = `mongodb://${process.env.MONGO_USERNAME}:${MONGO_PASSWORD}@${process.env.CLUSTER_NAMESPACE}-innovate-bank-mongodb.${process.env.CLUSTER_NAMESPACE}.svc.cluster.local/${process.env.MONGO_PORT}`

console.log('MONGO URL: ', mongoUrl)

var app = express();

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    store: new mongostore({url: mongoUrl}),
    resave: true,
    saveUninitialized: true,
    cookie: {
        cookieName: 'connect.sid',
        secret: process.env.SESSION_SECRET,
        httpOnly: false,
        secure: false,
        ephemeral: true
    }
}));

require('./routes/auth')(app);
require('./routes/user')(app, request, config.ports);
require('./routes/bills')(app, request, config.ports);
require('./routes/accounts')(app, request, config.ports);
require('./routes/transactions')(app, request, config.ports);
require('./routes/support')(app, request, config.ports);

var port = 3100;

mongoose.connect(mongoUrl, function (ignore, connection) {
    connection.onOpen();
    app.listen(port, function () {
        console.log('Innovate portal running on port: %d', port);
    });
});
