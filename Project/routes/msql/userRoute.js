const express = require('express');
const userController = require('../../controllers/msql/userController.js');
const isLoggedIn = require('../../middleware/user.js'); // Adicionar a importação do middleware

const router = express.Router();

router.post('/signin', userController.signin);
router.post('/signup', userController.signup);
router.post('/logout', userController.logout);

// GET todos os utilizadores
router.get('/getAllUsers', isLoggedIn, userController.getAllUsers);

// GET utilizador por ID
router.get('/getUserById/:id', isLoggedIn, userController.getUserById);

// POST criar utilizador
router.post('/createUser', isLoggedIn, userController.createUser);

// PUT atualizar utilizador por ID
router.put('/updateUser/:id', isLoggedIn, userController.updateUser);

// DELETE eliminar utilizador por ID
router.delete('/deleteUser/:id', isLoggedIn, userController.deleteUser);

module.exports = router;

