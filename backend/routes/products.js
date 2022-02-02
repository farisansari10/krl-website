const express = require('express');
const router = express.Router();

const { getProducts, saveProduct } = require('../controllers/productsController');

router.get('/all-products', getProducts);
router.post('/save-product', saveProduct);
module.exports = router;