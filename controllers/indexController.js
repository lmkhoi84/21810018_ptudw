'use strict';

const controller = {};
const models = require('../models');

// controller.createTables = (req,res) => {
//     let models = require('../models');
//     models.sequelize.sync().then(() => {
//         res.send('Table created !')
//     });
// };

controller.showHomePage = async (req,res) => {
    //Brands
    const Brand = models.Brand;
    const brands = await Brand.findAll();
    
    //Categories
    const categories = await models.Category.findAll();
    const secondArray = categories.splice(2,2);
    const thirdArray = categories.splice(1,1);
    res.locals.categoryArray = {
        categories,
        secondArray,
        thirdArray
    }

    //Products
    const featuredProducts = await models.Product.findAll({
        attibutes: ['id','name','imagePath','stars','price','oldPrice'],
        order: [['stars','DESC']],
        limit: 10
    });
    //res.locals.featuredProducts = featuredProducts;

    const recentProducts = await models.Product.findAll({
        attibutes: ['id','name','imagePath','stars','price','oldPrice','createdAt'],
        order: [['createdAt','DESC']],
        limit: 10
    });

    res.render('index',{brands,featuredProducts,recentProducts});
};

controller.showPage = (req,res,next) => {
    const pages = ['cart','checkout','contact','login','my-account','product-detail','product-list','wishlist'];
    if (pages.includes(req.params.page))
        return res.render(req.params.page);
    next();
};

module.exports = controller;