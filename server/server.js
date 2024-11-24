//modules
const app = require("./app");
const { connectDb } = require("./db/Connectdb");

connectDb()

//finnallly
app.listen(3000,()=>{
    console.log("Server is runnning on 3000")
})