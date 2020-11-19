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

app.route('/')
    .post(product.create_prod);

create_prod= function(req, res) {
  var name = new name(req.body);
 name.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  })

  var price = new price(req.body);
  price.save(function(err, task) {
     if (err)
       res.send(err);
     res.json(task);
   })

   var category= new category(req.body);
   category.save(function(err, task) {
     if (err)
       res.send(err);
     res.json(task);
   })

   var description= new description(req.body);
   description.save(function(err, task) {
     if (err)
       res.send(err);
     res.json(task);
   })

   var  image = new  image(req.body);
   image.save(function(err, task) {
     if (err)
       res.send(err);
     res.json(task);
   })

}



module.exports = router;