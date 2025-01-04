const mongoose = require("mongoose")
const validator = require("validator")



const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Room name must be at least 3 characters long"],
        maxlength: [32, "Room name must be at most 32 characters long"],
        unique: true
    },
    roomId: {
        type: String,
        required: true,
        unique: true
    },
    hasPassword: {
        type: Boolean,
        required: false,
        default: false
    },
    password: {
        type: String,
        trim: true,
        minlength: [8, "Password must be at least 8 characters long"],
        maxlength: [32, "Password must be at most 32 characters long"],
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("Password is not strong enough")
            }
        }
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    createdAt: {
        expires: '1d',
        type: Date,
        default: Date.now()
    },
    isActive: {
        type: Boolean,
        default: true
    },
    connectedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }],
    isPrivate: {
        type: Boolean,
        default: false
    },


}, { timestamps: true })

const Room = mongoose.model("Room", RoomSchema)
module.exports = Room
