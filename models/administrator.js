const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    adminName: {
        type: String,
        required: [true, "Please provide your Name"]
    },
    adminPhone: {
        type: String,
        required: false
    },
    adminEmail: {
        type: String,
        required: [true, "Please provide your email."],
        unique: true
    },
    restaurants: [{
        type: Schema.Types.ObjectId,
        ref: "Restaurants"
    }]
});
const Administrator = mongoose.model("Administrator", adminSchema);

module.exports = Administrator;
