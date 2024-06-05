const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/index', (req, res) => {
    const filePath = path.join(__dirname, '../frontEnd/Index.html');
    console.log('Serving:', filePath); // Log para verificar o caminho
    res.sendFile(filePath);
});

router.get('/login', (req, res) => {
    const filePath = path.join(__dirname, '../frontEnd/Login.html');
    console.log('Serving:', filePath); // Log para verificar o caminho
    res.sendFile(filePath);
});

router.get('/register', (req, res) => {
    const filePath = path.join(__dirname, '../frontEnd/Register.html');
    console.log('Serving:', filePath); // Log para verificar o caminho
    res.sendFile(filePath);
});

router.get('/forgotpassword', (req, res) => {
    const filePath = path.join(__dirname, '../frontEnd/ForgotPass.html');
    console.log('Serving:', filePath); // Log para verificar o caminho
    res.sendFile(filePath);
});

module.exports = router;
