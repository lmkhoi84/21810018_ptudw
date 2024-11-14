let controller = {};
const models = require('../models');


controller.show = async (req,res) => {
    let category = isNaN(req.query.category) ? 0 : parseInt(req.query.category);
    let brand = isNaN(req.query.brand)? 0 : parseInt(req.query.brand);
    let tag = isNaN(req.query.tag)? 0 : parseInt(req.query.tag);
    //Product list
    let options = {
        atrtibutes:['id','name','imagePath','stars','price','oldPrice'],
        where: {}
    };

    if (category > 0){
        options.where.categoryId = category;
    }

    if (brand > 0){
        options.where.brandId = brand;
    }

    if (tag > 0){
        options.where.brandId = tag;
    }

    let products = await models.Product.findAll(options);

    // Category List
    let categories = await models.Category.findAll({
        include:[{
            model: models.Product
        }],
        order:['name']
    });

    // Brand List
    let brands = await models.Brand.findAll({
        include: [{
           model: models.Product
        }]
    });

    // Tag list
    let tags = await models.Tag.findAll();

    res.render('product-list',{products,categories,brands,tags});
}

module.exports = controller;