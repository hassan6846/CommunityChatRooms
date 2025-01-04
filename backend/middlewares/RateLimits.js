const RateLimits = require("express-rate-limit")


const RegisterRateLimit = RateLimits({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 10, // start blocking after 100 requests

    handler: (req, res) => {
        res.status(429).json({
            success: false,
            msg: "Too many accounts created from this IP, please try again after an hour"
        });
    }
})


module.exports = { RegisterRateLimit }