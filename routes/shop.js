const express = require('express');
const path = require('path');
const routes = express.Router();
const adminData = require('./admin');
routes.get('/', (req, res, next) => {
    const prodcuts = adminData.products;
    console.log('====================================');
    console.log(adminData.products);
    console.log('====================================');
    prodcut = adminData.products;
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.render('shop', { prods: prodcuts, docTitle: 'shop' });
});
module.exports = routes; 