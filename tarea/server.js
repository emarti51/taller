const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/mi-pwa-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());

// Define tus modelos de datos y rutas API aquí

app.listen(PORT, () => {
  console.log(`Servidor PWA en funcionamiento en el puerto ${PORT}`);
});