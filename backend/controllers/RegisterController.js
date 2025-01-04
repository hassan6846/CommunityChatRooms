//librairies
const validator = require('validator')
//model
const User = require("../models/UserModel")


//Function Main Requirments
const Register = async (req, res) => {
  const {
    name,
    email,
    password,

  } = req.body
  if (!name || !email || !password) {
    return res.status(400).json({
      sucess: false,
      msg: "Please enter all fields"
    })
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      sucess: false,
      msg: "Invalid email format "
    })
  }
  if (password.length < 12) {
    return res.status(400).json({
      sucess: false,
      msg: "Password must be at least 12 characters long"
    })
  }
  if (password.length > 128) {
    return res.status(400).json({
      sucess: false,
      msg: "Password must be at most 128 characters long"
    })
  }
  if (!validator.isStrongPassword(password, {
    minLength: 12,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1
  })) {
    return res.status(400).json({
      sucess: false,
      msg: "Password is not strong enough"
    })
  }
  try {
    //find user already exist or not by email
    const findByEmail = await User.findOne({ email })
    if (findByEmail) {
      return res.status(400).json({
        sucess: false,
        msg: "User already exists"
      })
    }
    //create new user
    const user = new User({
      name,
      email,
      password
    })
    await user.save()
    return res.status(201).json({
      sucess: true,
      msg: "User Created Successfully"
    })
    // navigate to login page

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      sucess: false,
      msg: "Error While Signup"
    })
  }
}

module.exports = Register