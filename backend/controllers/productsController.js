const Product = require('../modals/Product');
const fs = require('fs');
const mongoose = require('mongoose');

const getProducts = async (req, res) => {
    try {
        const data = await Product.find({ subCategory: req.params.subCategory });
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

const saveProduct = async (req, res) => {
    const { name, description, category, subCategory } = req.body;
    const newProduct = new Product({ name, description, imgUrl: req.file.filename, category, subCategory });
    await newProduct.save(err => {
        if (err) {
            if (fs.existsSync(`public/images/${req.file.filename}`)) {
                fs.unlink(`public/images/${req.file.filename}`, (err) => {
                    if (err) return res.status(400).json({ message: err.message });
                });
            }
            return res.status(400).json({ message: err.message });
        }
        res.sendStatus(200);

    });
}

const updateProduct = async (req, res) => {
    const { id: _id } = req.params;
    const { name, description, category, subCategory, imgUrl } = req.body;

    let fileName = null;
    if (req.file && req.file.filename) {
        fileName = req.file.filename;
    }
    const updateProduct = { name, description, imgUrl: fileName || imgUrl, category, subCategory };
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post found with that id.');
    const oldProductUpdated = await Product.findByIdAndUpdate({ _id }, updateProduct, { new: false });
    if (fs.existsSync(`public/images/${oldProductUpdated.imgUrl}`)) {
        fs.unlink(`public/images/${oldProductUpdated.imgUrl}`, (err) => {
            if (err) return res.status(400).json({ message: "Product is deleted but image is not. " + err.message });
        });
    }
    res.sendStatus(200);
}

const deleteProduct = async (req, res) => {
    const { id: _id } = req.params;
    try {
        if (!mongoose.isValidObjectId(_id)) return res.status(400).json({ message: "Product ID is invalid" });
        const deletedProductInfo = await Product.findByIdAndRemove({ _id });
        if (fs.existsSync(`public/images/${deletedProductInfo && deletedProductInfo.imgUrl}`)) {
            fs.unlink(`public/images/${deletedProductInfo.imgUrl}`, (err) => {
                if (err) return res.status(400).json({ message: "Product is deleted but image is not. " + err.message });
            });
        }
        res.sendStatus(200);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getProducts, saveProduct, updateProduct, deleteProduct };