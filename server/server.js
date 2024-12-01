//modules
const server = require("./app");
const { connectDb } = require("./db/Connectdb");

connectDb()

//finnallly
server.listen(3000,()=>{
    console.log("Server is runnning on 3000")
})