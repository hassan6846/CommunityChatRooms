
const mongoose = require("mongoose")



const ReportModel = new mongoose.Schema({
    reportedUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    reportedMessage: {
        type: String,
        required: true,
        trim: true,
        minlength: [10, "Message must be at least 10 characters long"],
        maxlength: [500, "Message must be at most 1000 characters long"],
    },
    reportedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

}, { timestamps: true })

const Report = mongoose.model("Report", ReportModel)

module.exports = Report
