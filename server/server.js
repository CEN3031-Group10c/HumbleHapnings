const express = require('./config/express.js');
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");

const config = require ('./config/config');
const users = require("./routes/api/users");
const churches = require("./routes/server.church.routes");

const app = express.init();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());

 // Connect to MongoDB database
 mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true  })
 .then(() => console.log("MongoDB successfully connected"))
 .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);


// Use env port or default
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server now running on port ${port}!`));
