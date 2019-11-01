const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const Schema = mongoose.Schema;

const SchemaTypes = mongoose.Schema.Types;
const orderSchema = new Schema({
    dishName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dishPrice: {
        type: SchemaTypes.Double,
        required: true
    },
    dishQuantity: {
        type: Number,
        default: 1
    },
    notes: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 160
    },
    filled: {
        type: Boolean,
        default: false
    },
    paid: {
        type: Boolean,
        default: false
    },
    timePlaced: {
        type: Date,
        default: Date.now
    },
    timeUpdated: {
        type: Date,
        required: false
    },
    timeFilled: {
        type: Date,
        required: false
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
