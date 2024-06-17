// routes/msql/horariosRoute.js
const express = require('express');
const horariosController = require('../../controllers/msql/horariosController.js');
const isLoggedIn = require('../../middleware/user.js'); // Importa o middleware

const router = express.Router();

router.get('/', isLoggedIn, horariosController.getAllHorarios);
router.get('/:id', isLoggedIn, horariosController.getHorarioById);
router.post('/createHorario', isLoggedIn, horariosController.createHorario);
router.put('/:id', isLoggedIn, horariosController.updateHorario);
router.delete('/:id', isLoggedIn, horariosController.deleteHorario);

router.get('/byTurma/:turmaId', horariosController.getHorariosByTurma);


module.exports = router;
