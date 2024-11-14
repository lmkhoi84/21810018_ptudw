'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

// router.get('/createTAbles', controller.createTables);

router.get('/', controller.showHomePage);

router.get('/:page', controller.showPage);

module.exports = router;