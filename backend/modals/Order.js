const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    name: String,
    email: String,
    cnic: Number,
    phoneNo: Number,
    designation: String,
    address: String,
    orderedItems: Array,
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;