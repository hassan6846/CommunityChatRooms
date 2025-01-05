const express = require('express')
const router = express.Router()

//controllers
const Register = require('../controllers/RegisterController')
const Logout =require("../controllers/LogoutController")
//middlewares..
const { RegisterRateLimit } = require('../middlewares/RateLimits')
//routes
router.route('/signup').post(RegisterRateLimit, Register)
router.route('/logout').post(Logout)

module.exports = router