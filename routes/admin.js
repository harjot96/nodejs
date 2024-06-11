const express =require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const products=[];
// so these routes will be filtered by /admin/add-product

router.get('/add-product',(req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('addProduct',{pageTitle:"AddProducts"})


})
// router.post('/product',(req, res, next) => {
//     res.redirect('/');
// })
router.post('/add-prodcut',(req, res, next) => {

    products.push({title:req.body.title});

    res.redirect('/')

})



exports.route=router;
exports.products=products;
