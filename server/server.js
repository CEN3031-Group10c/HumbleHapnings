const express = require('./config/express.js');
const mongoose = require("mongoose");
//const passport = require("passport");
const config = require ('./config/config')

 // Connect to database
 mongoose.connect(config.db.uri, { useNewUrlParser: true });

// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));
