const mongoose = require('mongoose');

// Room Schema
const RoomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 50
    },
    description: {
        type: String,
        maxlength: 255,
        default: ''  // Optional description for the room
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Room model
const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
