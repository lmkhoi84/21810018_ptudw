'use strict';

const controller = {};

// controller.createTables = (req,res) => {
//     let models = require('../models');
//     models.sequelize.sync().then(() => {
//         res.send('Table created !')
//     });
// };

controller.showHomePage = (req,res) => {
    res.render('index');
};

controller.showPage = (req,res,next) => {
    const pages = ['cart','checkout','contact','login','my-account','product-detail','product-list','wishlist'];
    if (pages.includes(req.params.page))
        return res.render(req.params.page);
    next();
};

module.exports = controller;