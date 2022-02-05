const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: "String", required: true },
    imgUrl: { type: "String", required: true },
    description: { type: "String", required: true },
    category: { type: "String", required: true },
    subCategory: { type: "String", required: true },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;