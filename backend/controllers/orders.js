const Order = require('../modals/Order');

const getOrders = async (req, res) => {
    try {
        const data = await Order.find();
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

const storeOrder = async (req, res) => {
    const { name, email, cnic, orderedItems } = req.body;
    const newOrder = new Order({ name, email, cnic, orderedItems });
    try {
        await newOrder.save(error => {
            if (error) throw error.message;
        });
        res.sendStatus(200);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

module.exports = { getOrders, storeOrder };