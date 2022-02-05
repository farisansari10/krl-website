const express = require('express');
const router = express.Router();
const upload = require('../helper/multer');
const { getProducts, saveProduct, updateProduct, deleteProduct } = require('../controllers/productsController');

router.get('/all/:subCategory', getProducts);
router.post('/store', upload.single("product"), saveProduct);
router.patch("/update/:id", upload.single("product"), updateProduct);
router.delete("/delete/:id", deleteProduct);
module.exports = router;