// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para obter dados do usuário por ID
router.get('/:id', userController.getUserById);

// Rota para editar dados do usuário
router.post('/edit', userController.editUser);

// Rota para alterar a senha do usuário
router.post('/changepass', userController.changePassword);

// Rota para excluir a conta do usuário
router.post('/delete', userController.deleteAccount);

module.exports = router;
