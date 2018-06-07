// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Table Reservations (DATA)
// =============================================================
var tables = [{
        customerName: "Randy Gentry",
        phoneNumber: "555-555-5555",
        customerEmail: "dhrandy@gmail.com",
        customerID: "rg101"
    },
    {
        customerName: "Dzmitry",
        phoneNumber: "343453",
        customerEmail: "sds@dfs.sd",
        customerID: "34232423"
    }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", (req, res) => {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", (req, res) => {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api/tables", (req, res) => {
    res.sendFile(path.join(__dirname, tables));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});