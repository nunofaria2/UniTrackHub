const express = require('express');
const path = require('path');
const isLoggedIn = require('../middleware/user');
const router = express.Router();

router.get('/main', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../backOffice/Main.html'));
});

router.get('/horario', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../backOffice/Horario.html'));
});

router.get('/horarios-turmas', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../backOffice/HorariosTurmas.html'));
});

router.get('/userCRUD', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../backOffice/userCRUD.html'));
});

module.exports = router;