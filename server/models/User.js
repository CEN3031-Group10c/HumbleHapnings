const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create the user schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    paidUser: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    userType: {
        type: String,
        required: true,
        default: "NORMAL"
    }
});

module.exports = User = mongoose.model("users", UserSchema);