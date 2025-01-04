const mongoose = require("mongoose")
const validator = require("validator")


const MessageSchema = new mongoose.Schema({
    RoomId: {
        type: mongoose.Types.ObjectId,
        ref: "Room",
        
        required: true,
    },
    sendedby: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    content: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return validator.isLength(v, { min: 1, max: 200 });
            },
            message: "message must be between 1 and 200 characters"
        },
        maxlength: [200, "message must note  be  more than 200 characters"],

    },
    
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Message=mongoose.model("Message",MessageSchema)
module.exports=Message