const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userName: String,
    email: String,
    cnic: Number,
    orderedItems: Array,
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;