const RateLimits = require("express-rate-limit")


const RegisterRateLimit = RateLimits({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 5, //5 request from single ip for registration...
    

    handler: (req, res) => {
        res.status(429).json({
            success: false,
            msg: "Too many accounts created from this IP, please try again after an hour"
        });
    }
})

///
const LoginRequestLimit=RateLimits({
    windowMs: 15 * 60 * 1000, // 15 minutes window
    max: 20, //10 request from single ip for login...
     handler: (req, res) => {
        res.status(429).json({
            success: false,
            msg: "Too many login attempts from this IP, please try again after 15 minutes"
        });
    }
})
module.exports = { RegisterRateLimit,LoginRequestLimit }