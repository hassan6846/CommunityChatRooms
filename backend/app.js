const express=require('express')
const app=express()
//packages
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');


//middlewares
app.set('trust proxy', 1) // trust first proxy
app.disable('x-powered-by')
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})



//routes
const AuthRoutes=require('./routes/AuthRoutes')


//routes middleware
app.use('/api/v1/',AuthRoutes)


//export
module.exports=app


