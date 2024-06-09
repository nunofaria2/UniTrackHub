const express = require('express');
const middleware = require('../middleware/user.js');
const path = require('path');
const router = express.Router();

router.get('/main', middleware.verificarToken, (req, res) => {
    const filePath = path.join(__dirname, '../backOffice/Main.html');
    console.log('Serving:', filePath); // Log para verificar o caminho
    res.sendFile(filePath);
});

router.get('/horario', middleware.verificarToken, (req, res) => {
    const filePath = path.join(__dirname, '../backOffice/Horario.html');
    console.log('Serving:', filePath); // Log para verificar o caminho
    res.sendFile(filePath);
});

router.get('/horariosturmas', middleware.verificarToken, (req, res) => {
    const filePath = path.join(__dirname, '../backOffice/HorariosTurmas.html');
    console.log('Serving:', filePath); // Log para verificar o caminho
    res.sendFile(filePath);
});

module.exports = router;
