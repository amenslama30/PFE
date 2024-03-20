const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

const authRoute = require("./routes/authRoute.js");
const facebookRoute = require("./routes/facebookRoute.js");


const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Use express-session middleware for sessions
app.use(session({
  secret: 'Orixo2002.Amen12345!',
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session())

// Include Passport Facebook authentication strategy


// Include auth routes
app.use(authRoute)
app.use('/auth', facebookRoute)

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
