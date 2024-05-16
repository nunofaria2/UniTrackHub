// authRoute.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota para login (SignIn)
router.post('/signin', authController.signIn);

// Rota para registro (SignUp)
router.post('/signup', authController.signUp);

module.exports = router;