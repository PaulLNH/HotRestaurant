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
        customerName: "Adam",
        phoneNumber: "555-555-5555",
        customerEmail: "dhrandy@gmail.com",
        customerID: "Adam's Table of 5"
    },
    {
        customerName: "Corey",
        phoneNumber: "343453",
        customerEmail: "sds@dfs.sd",
        customerID: "Corey's Table of 3"
    },
    {
        customerName: "Jason",
        phoneNumber: "343453",
        customerEmail: "sds@dfs.sd",
        customerID: "Jason's Table of 1"
    },
    {
        customerName: "Matt",
        phoneNumber: "343453",
        customerEmail: "sds@dfs.sd",
        customerID: "Matt's Table of 2"
    }
];

var waitList = [{
        customerName: "Outta Luck",
        phoneNumber: "555-555-5555",
        customerEmail: "dhrandy@gmail.com",
        customerID: "Outta Luck's Table of 2"
    },
    {
        customerName: "Nosuch Lok",
        phoneNumber: "343453",
        customerEmail: "sds@dfs.sd",
        customerID: "Nosuch Lok's Table of 4"
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

// Create New Reservation - takes in JSON input
app.post("/api/tables", (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;

    console.log(newReservation);

    if (tables.length < 5) {
        tables.push(newReservation);
    } else {
        waitList.push(newReservation);
    }

    res.json(newReservation);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});