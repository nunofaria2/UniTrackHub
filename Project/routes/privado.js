const express = require('express');
const path = require('path');
const isLoggedIn = require('../middleware/user');
const checkAdmin = require('../middleware/userAdmin');
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

router.get('/userCRUD', isLoggedIn, checkAdmin, (req, res) => {
    res.sendFile(path.join(__dirname, '../backOffice/userCRUD.html'));
});

router.get('/turmaCRUD', isLoggedIn, checkAdmin, (req, res) => {
    res.sendFile(path.join(__dirname, '../backOffice/turmaCRUD.html'));
});


module.exports = router;