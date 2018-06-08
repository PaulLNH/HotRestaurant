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

var waitList = [{
        customerName: "Outta Luck",
        phoneNumber: "555-555-5555",
        customerEmail: "dhrandy@gmail.com",
        customerID: "rg101"
    },
    {
        customerName: "Nosuch Lok",
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

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Displays tables api JSON
app.get("/api/tables", (req, res) => {
    return res.json(tables);
});

// Displays wait list api JSON
app.get("/api/waitlist", (req, res) => {
    return res.json(waitList);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});