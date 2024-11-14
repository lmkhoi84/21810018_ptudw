let controller = {};
const models = require('../models');


controller.show = async (req,res) => {
    let products = await models.Product.findAll({
        atrtibutes:['id','name','imagePath','stars','price','oldPrice'],
    });
    res.render('product-list',{products});
}

module.exports = controller;