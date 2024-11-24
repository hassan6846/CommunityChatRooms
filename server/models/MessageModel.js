const mongoose = require('mongoose');

// Message Schema
const MessageSchema = mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true,
        maxlength: 500  // Max length for message content
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Message model
const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
