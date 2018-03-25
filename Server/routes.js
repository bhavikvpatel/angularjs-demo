// app/routes.js


var databaseUrl = "mongodb://127.0.0.1:27017/sampledb";
var collections = ["users"];
var mongojs = require("mongojs");
var db = mongojs(databaseUrl, collections);

////require mongoose node module
//var mongoose = require('mongoose');

////connect to local mongodb database
//var db = mongoose.connect('mongodb://127.0.0.1:27017/sampledb');

////attach lister to connected event
//mongoose.connection.once('connected', function () {
//    console.log("Connected to database")
//});


//var mongoose = require('mongoose');

//var db = mongoose.connection;

//db.on('error', console.error);
//db.once('open', function () {
//    // Create your schemas and models here.
//});

//mongoose.connect('mongodb://127.0.0.1/test');

//// grab the nerd model we just created
//var Nerd = require('./models/nerd');

module.exports = function (app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/nerds', function (req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function (err, nerds) {

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });

    app.all('/*', function (request, response, next) {
        response.header("Access-Control-Allow-Origin", "*");
        response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        if (request.method == 'OPTIONS') {
            response.status(200).end();
        } else {
            next();
        }
    });



    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests

    //app.get('*', function (req, res) {
    //    res.sendfile('./public/views/index.html'); // load our public/index.html file
    //});
    app.get('/api', function (req, res) {
        res.send('Our Sample API is up...');
    });


    app.get('/getangularusers', function (req, res) {
        debugger
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        res.send(db.users.find());
        // The above 2 lines are required for Cross Domain Communication(Allowing the methods that come as Cross           // Domain Request
        //db.things.find('', function (err, users) { // Query in MongoDB via Mongo JS Module
        //    if (err || !users) console.log("No users found");
        //    else {
        //        res.writeHead(200, { 'Content-Type': 'application/json' }); // Sending data via json
        //        str = '[';
        //        users.forEach(function (user) {
        //            str = str + '{ "name" : "' + user.username + '"},' + '\n';
        //        });
        //        str = str.trim();
        //        str = str.substring(0, str.length - 1);
        //        str = str + ']';
        //        res.end(str);
        //        // Prepared the jSon Array here
        //    }
        //});
    });

    app.post('/insertangularmongouser', function (req, res) {
        debugger
        console.log("POST: ");
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        // The above 2 lines are required for Cross Domain Communication(Allowing the methods that come as  
        // Cross Domain Request
        console.log(req.body);
        console.log(req.body.mydata);
        var jsonData = JSON.parse(req.body.mydata);
        //var jsonData = {
        //    email: "bhavik@gmail.com",
        //    username: "bhavik07",
        //    password: "bhavik"
        //};

        db.users.save({ email: jsonData.email, password: jsonData.password, username: jsonData.username },
             function (err, saved) { // Query in MongoDB via Mongo JS Module
                 if (err || !saved) res.end("User not saved");
                 else res.end("User saved");
             });
    });
};