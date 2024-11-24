const express=require('express')
const router=express.Router()
//controllers
const loginFunction = require("../controllers/auth/Login");
const RegisterFunction = require("../controllers/auth/Register");

router.route('/login').post(loginFunction)
router.route('/signup').post(RegisterFunction)

module.exports=router