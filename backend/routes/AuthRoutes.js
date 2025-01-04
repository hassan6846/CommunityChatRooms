const express = require('express')
const router = express.Router()

//controllers
const Register = require('../controllers/RegisterController')
//middlewares..
const { RegisterRateLimit } = require('../middlewares/RateLimits')
//routes
router.route('/signup').post(RegisterRateLimit, Register)


module.exports = router