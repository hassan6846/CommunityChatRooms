const express=require("express")
const app=express()
//packages
const bodyParser=require("body-parser")
require("dotenv").config()
//middlewares

app.use(bodyParser.json());
//routes
const auth=require("./routes/AuthRoutes")
//endpointss
app.use('/api/v1',auth)

module.exports=app
