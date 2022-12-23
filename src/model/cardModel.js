const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true,
        trim: true
    },
    cardType: {
        type: String,
        enum: ["REGULAR", "SPECIAL"]
    },
    customerName: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        default: "ACTIVE"
    },
    vision: String,
    customerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
        required: true
    }

},{timestamps : true})

module.exports = mongoose.model("card", cardSchema)