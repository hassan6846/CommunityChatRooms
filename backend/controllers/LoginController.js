

const User = require("../models/UserModel")
const validator = require("validator")



//Login
const Login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                msg: "Invalid Email Format"
            })
        }
        //find user
        const finduser = await User.findOne({ email })
        if (!finduser) {
            return res.status(404).json({
                success: false,
                msg: "User Not Found"
            })

        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: "Error Encountered While login in Please Try Again !"
        })
    }
}

module.exports = Login;
