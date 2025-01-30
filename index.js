const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const {dbConnection} = require('./database/config');


// crear el servidor de express: 

const app = express(); 

// Base de Datos 
dbConnection();

app.use(cors())

// Directorio público
app.use(express.static('public'));

// Lectura y parseo del body 

app.use(express.json());

// rutas 
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
// TODO CRUD: eventos 

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
// escuchar peticiones 

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})