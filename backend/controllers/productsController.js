const Product = require('../modals/Product');
const mongoose = require('mongoose');

const getProducts = async (req, res) => {
    try {
        const data = await Product.find();
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

const saveProduct = async (req, res) => {
    const { name, imgUrl, price } = req.body;
    try {
        const newProduct = Product({ name, imgUrl, price });
        newProduct.save();
        res.sendStatus(200);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getProducts, saveProduct };