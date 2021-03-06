const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');


const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
app.use("/static", express.static(path.join(__dirname + '/public')));

const CONNECTION_URL = 'mongodb+srv://faris:click@krlf-website-cluster.rfkjr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// adding port number
const PORT = process.env.PORT || 4000;

// product Build
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
    app.use(express.static("../isp-template/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/isp-template/build/index.html"));
    });
}

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
    }).catch(error => {
        console.log(error.message);
    });

// mongoose.set('useFindAndModify', false);