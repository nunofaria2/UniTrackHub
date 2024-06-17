require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

const publicoRouter = require('./routes/publico');
const routerMsql = require('./routes/msql/userRoute');
const routerMsqlTurma = require('./routes/msql/turmaRoute');
const privadoRouter = require('./routes/privado');
const routerMsqlHorarios = require('./routes/msql/horariosRoute');


const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configurar sessões
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Em produção, use true se estiver usando HTTPS
}));

app.use('/api/public', publicoRouter);
app.use('/api/msql', routerMsql);
app.use('/api/msql/horarios', routerMsqlHorarios);
app.use('/api/msql/turma', routerMsqlTurma);
app.use('/api/priv', privadoRouter);

const port = process.env.SERVER_PORT || 4242;
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
