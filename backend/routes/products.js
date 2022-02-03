const express = require('express');
const router = express.Router();
const upload = require('../helper/multer');
const { getProducts, saveProduct } = require('../controllers/productsController');

router.get('/all', getProducts);
router.post('/store', upload.single("product"), saveProduct);
module.exports = router;