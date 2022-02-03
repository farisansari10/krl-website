const Product = require('../modals/Product');
const fs = require('fs');

const getProducts = async (req, res) => {
    try {
        const data = await Product.find();
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

module.exports = { getProducts, saveProduct };