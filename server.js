// server.js

const express = require('express');
const app = express();

// Importa as rotas
const authRoutes = require('./routes/authRoutes');
const frontendRoutes = require('./routes/frontendRoutes');
const backofficeRoutes = require('./routes/backofficeRoutes');

// Define as rotas
app.use('/api', authRoutes);
app.use('/', frontendRoutes);
app.use('/backoffice', backofficeRoutes);

// Outros middlewares e configurações do servidor...

const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
    console.log('Express server listening on port', port)
});

