// server.js
var application_root = __dirname;
path = require("path");



// modules =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

//// config files
//var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080;

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
//var mongoose = require('mongoose');
//mongoose.connect(db.url);



// mongoose 3.8.x
var mongoose = require('mongoose');
// mongodb-uri 0.9.x
var uriUtil = require('mongodb-uri');

/* 
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 */
var options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

/*
 * Mongoose uses a different connection string format than MongoDB's standard.
 * Use the mongodb-uri library to help you convert from the standard format to
 * Mongoose's format.
 */
//var mongodbUri = 'mongodb://admin:admin@ds035385.mongolab.com:35385/demo';
//var mongooseUri = uriUtil.formatMongoose(mongodbUri);

//mongoose.connect(mongooseUri, options);
//var conn = mongoose.connection;

//conn.on('error', console.error.bind(console, 'connection error:'));

//conn.once('open', function () {
//    // Wait for the database connection to establish, then start the app.                         
//});


//// Config

//app.configure(function () {
//    app.use(express.bodyParser());
//    app.use(express.methodOverride());
//    app.use(app.router);
//    app.use(express.static(path.join(application_root, "public")));
//    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
//});


////// Retrieve
//var MongoClient = require('mongodb').MongoClient;

////// Connect to the db
//MongoClient.connect("mongodb://admin:admin@ds035385.mongolab.com:35385/demo", function (err, db) {
//    if (!err) {
//        console.log("We are connected");
//    }
//    else {
//        console.log(err);
//    }
//});


// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;
