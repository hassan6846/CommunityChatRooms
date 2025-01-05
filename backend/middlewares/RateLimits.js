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


module.exports = { RegisterRateLimit }