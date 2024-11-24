const mongoose = require('mongoose');
const bcrypt = require("bcrypt");


const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    lastname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    avatar: {
        type: String,
        default: 'https://example.com/default-avatar.png'
    },

    bio: {
        type: String,
        maxlength: 200,
        default: ''
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },



    twoFactorSecret: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
});


UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

//during login
UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Create the modeeel
const User = mongoose.model('User', UserSchema);

module.exports = User;
