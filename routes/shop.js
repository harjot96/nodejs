const express=require('express');
const path = require('path');
const routes = express.Router();
const adminData=require('./admin');
routes.get('/',(req, res, next) => {
    prodcut=adminData.products;
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.render('shop');
});
module.exports = routes; 