const express = require("express");
const config = require("./config/config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

let app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Monggose Connection
mongoose.connect(config.db.uri, { newUrlParser: true });

//Database
let db = mongoose.connection;

if (!db) {
    console.log("Error connecting to MongoDB")
} else {
    console.log(`Connected to MongoDB at ${config.db.uri}`);
}

require('./routes/api-routes')(app);

app.listen(config.port, () => {
    console.log(`Application running on port ${config.port}`);
});