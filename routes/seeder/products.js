const express = require('express');
const router = express.Router();
const faker = require('faker');
const Product = require('../../models/Product');
const Category = require('../../models/Category');

router.get('/', function (req, res, next) {
    const categories = ["Phone", "NoteBook", "Computers"];
        let product = new Product({
            name : "Iphone",
            price : 400,
            category: "Phone",
            description : "asadas",
            image: "https://images-na.ssl-images-amazon.com/images/I/4196ru-rkjL.jpg"
        })
        
        
        product.save();
    
    for (let i = 0; i < categories.length; i++) {
        let cat = new Category({
            title: categories[i]
        });
        cat.save();
    }
    res.redirect('/')
});

router.route('/products').post(function(req, res) {
    var new_product = new Product(req.body);
    new_product.save(function(err, product) {
      if (err) res.send(err);
      res.json(product);
    })
  });

  router.route('/products/').delete(function(req, res) {
    res.send(req.body.data);
  });


module.exports = router;
