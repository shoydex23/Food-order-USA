const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    customerPhone: {
        type: String,
        required: false
    },
    customerEmail: {
        type: String,
        required: true,
        unique: true
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }]
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
