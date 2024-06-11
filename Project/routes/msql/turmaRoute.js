const express = require('express');
const turmaController = require('../../controllers/msql/turmaController.js');
const isLoggedIn = require('../../middleware/user.js'); // Adicionar a importação do middleware

const router = express.Router();

router.get('/', isLoggedIn, turmaController.getAllTurmas);
router.get('/:id', isLoggedIn, turmaController.getTurmaById);
router.post('/createTurma', isLoggedIn, turmaController.createTurma);
router.put('/:id', isLoggedIn, turmaController.updateTurma);
router.delete('/:id', isLoggedIn, turmaController.deleteTurma);

module.exports = router;
