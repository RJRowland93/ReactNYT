// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// Requiring our Article models
var Article = require("./models/article.js");
var Key = require("./key.js");
// Scraping tools
var request = require("request");
var cheerio = require("cheerio");

var Promise = require("bluebird");

mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect(Key.MONGODB_URI);
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// Routes

// Index route
app.get("/", function(req, res) {
  res.send(index.html);
});


// articles scraped from the mongoDB
app.get("/articles", function(req, res) {

  Article.find({}, function(err, doc) {
    if (err) throw err;
    res.send(doc);
  });

});

// This will grab an article by it's ObjectId
app.get("/articles/:id", function(req, res) {

  Article.findOne({"_id": req.params.id})
    // and run the populate method with "note",
    .populate("note")
  // then responds with the article with the note included
    .exec(function(err, doc) {
      if (err) throw err;
      res.send(doc);
    });
 });

// Create a new note or replace an existing note
app.post("/articles/:id", function(req, res) {

  var newNote = new Note(req.body);
  // save the new note that gets posted to the Notes collection
  newNote.save(function(err, doc) {
  // then find an article from the req.params.id
  // and update it's "note" property with the _id of the new note
  if (err) throw err;
  Article.findOneAndUpdate({"_id": req.params.id}, {"note": doc._id})
  .exec(function(err, doc) {
    if (err) throw err;
    res.send(doc);
    });
  });
});


// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
