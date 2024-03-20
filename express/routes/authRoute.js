const {Router} = require('express')
const router = Router()
const {signup, login} = require('../controllers/usercon.js')



// Route for initiating login
router.post('/login' , login)
// Route for initiating signup
router.post('/register' , signup)

// // Use Facebook authentication strategy
// passport.use(facebookStrategy);
// // Route for initiating Facebook authentication
// router.get('/facebook', passport.authenticate('facebook'))
// // Callback route for Facebook authentication
// router.get('/facebook/callback', passport.authenticate('facebook', {
//     successRedirect: '/main', // Redirect to profile page on success
//     failureRedirect: '/signup' // Redirect to login page on failure
// }));


module.exports = router