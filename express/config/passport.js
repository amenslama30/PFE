const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models/User.js')
require('dotenv').config()


passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_SECRET_KEY,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL
}, 
async (accessToken, refreshToken, profile, done) => {
  User.findOne({ _id: profile.id }).then(user => {
    if (user) {
      // Already have a record
      done(null, user)
    } else {
      // Add new record
      new User({ _id: profile.id, username: profile.displayName })
        .save()
        .then(user => done(null, user))
    }
  })
})) 
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport