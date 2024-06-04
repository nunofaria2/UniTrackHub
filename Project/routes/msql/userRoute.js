const express = require('express');
const router = express.Router();
const userController = require('../../controllers/msql/userController');

router.post('/register', userController.register);

module.exports = router;
