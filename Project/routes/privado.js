const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/main', (req, res) => {
    const filePath = path.join(__dirname, '../backOffice/Main.html');
    console.log('Serving:', filePath); // Log para verificar o caminho
    res.sendFile(filePath);
});

router.get('/horario', (req, res) => {
    const filePath = path.join(__dirname, '../backOffice/Horario.html');
    console.log('Serving:', filePath); // Log para verificar o caminho
    res.sendFile(filePath);
});

router.get('/horariosturmas', (req, res) => {
    const filePath = path.join(__dirname, '../backOffice/HorariosTurmas.html');
    console.log('Serving:', filePath); // Log para verificar o caminho
    res.sendFile(filePath);
});

module.exports = router;
