const express = require('express');
const router = express.Router();
const { getOrders, storeOrder } = require('../controllers/orders');

router.get('/all', getOrders);
router.post('/store', storeOrder);
module.exports = router;