const express = require("express")
const app = express()
const cors=require('cors')
const http = require('http')
const server = http.createServer(app)

const socket=require("socket.io")
const io=socket(server)
io.on('connection', (socket) => {
    console.log('New client connected');
  
    // Listen for a "sendMessage" event from the client
    socket.on('sendMessage', (message) => {
      console.log('Received message:', message);
  
      // Emit the received message to all connected clients
      io.emit('receiveMessage', message);
    });
  
    // Handle client disconnect
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
//packages
const bodyParser = require("body-parser")
require("dotenv").config()
//middlewares
//server

app.use(bodyParser.json());
app.use(express.json({

}))
app.use(cors());
//routes
const auth = require("./routes/AuthRoutes")


//endpointss
app.use('/api/v1', auth)


module.exports = app
