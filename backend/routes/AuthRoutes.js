const express = require('express')
const router = express.Router()

//controllers
const Register = require('../controllers/Auth/RegisterController')
const Logout = require('../controllers/Auth/LogoutController')
//middlewares..
const { RegisterRateLimit } = require('../middlewares/RateLimits')

//routes
router.route('/signup').post(RegisterRateLimit, Register)
router.route('/logout').post(Logout)

module.exports = router