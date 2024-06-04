require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const publicoRouter = require('./routes/publico');
//const routerMsql = require('./routes/msql');
const privadoRouter = require('./routes/privado');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/', publicoRouter);
app.use('/pri/', privadoRouter);  
//app.use('/api/msql', routerMsql);  

const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
    console.log('Express server listening on port', port);
});
