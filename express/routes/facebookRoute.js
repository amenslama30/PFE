const {Router} = require('express')
const router = Router()
const passport = require("../config/passport.js");

// Route for initiating Facebook authentication
router.get('/facebook', passport.authenticate('facebook'))
// Callback route for Facebook authentication
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
(req, res) => {
    res.redirect('/main')
  }
);

module.exports = router