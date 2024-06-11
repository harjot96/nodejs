const express = require('express');
const app = express();
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');  
const path = require('path');

var bodyParser = require('body-parser');
//lets add template engine

app.set('view engine','pug')
app.use(bodyParser.urlencoded({ extended: false }));
//if we want to make use of css file in the code

app.use(express.static(path.join(__dirname,'public')));

//if we want to filter path like admin have only access to path like in the 
// url we send /admin/add-product like this then we can use the filter path in express.

// app.use(adminRoutes);
app.use('/admin',adminRoutes.route);
app.use(shopRoutes);

//let check the 404 validation
app.use((req,res,next)=>{ 
    res.sendFile(path.join(__dirname,'views','404.html'));
 })

app.listen(3000);