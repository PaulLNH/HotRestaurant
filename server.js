// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create arrays for our "database"
var tables = [
    {tableNo: 1,
    reserved: false,
    resBy: ''},
    {tableNo: 2,
    reserved: false,
    resBy: ''},
    {tableNo: 3,
    reserved: false,
    resBy: ''},
    {tableNo: 4,
    reserved: false,
    resBy: ''},
    {tableNo: 5,
    reserved: false,
    resBy: ''}
]

var waiting = [
    {tableNo: 1,
    reserved: false,
    resBy: ''},
    {tableNo: 2,
    reserved: false,
    resBy: ''},
    {tableNo: 3,
    reserved: false,
    resBy: ''},
    {tableNo: 4,
    reserved: false,
    resBy: ''},
    {tableNo: 5,
    reserved: false,
    resBy: ''}
]

// Displays all reservations
app.get("/api/tables", function(req, res) {
    res.json(tables);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});