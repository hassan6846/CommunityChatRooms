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
app.use(express.json())
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})



//routes
app.get('/', (req, res) => {
    res.send('/api/v1');
});

//server


//export
module.exports=app


