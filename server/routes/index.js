const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.use('/', mainController.homepage);

module.exports = router;