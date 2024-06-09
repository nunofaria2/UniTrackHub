const express = require('express');
const router = express.Router();
const userController = require('../../controllers/msql/userController');

router.post('/register', userController.signup); // Chama a função signup do userController
router.post('/login', userController.signin);   // Chama a função signin do userController

module.exports = router;
