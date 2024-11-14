let controller = {};
const { where, Op } = require('sequelize');
const models = require('../models');

controller.getData = async (req,res,next) => {
    // Category List
    let categories = await models.Category.findAll({
        include:[{
            model: models.Product
        }],
        order:['name']
    });
    res.locals.categories = categories;

    // Brand List
    let brands = await models.Brand.findAll({
        include: [{
           model: models.Product
        }]
    });
    res.locals.brands = brands;

    // Tag list
    let tags = await models.Tag.findAll();
    res.locals.tags = tags;

    next();
}

controller.show = async (req,res) => {
    let category = isNaN(req.query.category) ? 0 : parseInt(req.query.category);
    let brand = isNaN(req.query.brand)? 0 : parseInt(req.query.brand);
    let tag = isNaN(req.query.tag)? 0 : parseInt(req.query.tag);
    //Product list
    let options = {
        attributes:['id','name','imagePath','stars','price','oldPrice'],
        where: {}
    };

    if (category > 0){
        options.where.categoryId = category;
    }

    if (brand > 0){
        options.where.brandId = brand;
    }

    if (tag > 0){
        options.include = [{
            model: models.Tag,
            where: {id: tag}
        }]
    }

    let products = await models.Product.findAll(options);

    

    res.render('product-list',{products});
}

controller.showDetails = async (req,res) => {
    let id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    
    let product = await models.Product.findOne({
        attributes:['id','name','stars','price','oldPrice','summary','description','specification'],
        where: {id},
        include: [{
            model: models.Image,
            attributes:['name','imagePath']
        },{
            model: models.Review,
            attributes:['id','review','stars','createdAt'],
            include: [{
                model: models.User,
                attributes:['firstName','lastName']
            }]
        },{
            model: models.Tag,
            attributes: ['id']
        }]
    });
    

    let tagIds=[];
    product.Tags.forEach(tag => tagIds.push(tag.id))
    let relatedProducts = await models.Product.findAll({
        attributes:['id','name','imagePath','stars','price','oldPrice','summary','description','specification'],
        include: [{
            model: models.Tag,
            attributes:['id'],
            where: {
                id: { [Op.in]: tagIds}
            }
        }]
    });


    res.render('product-detail',{product,relatedProducts});
}

module.exports = controller;