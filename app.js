// import express from 'express';
// import routeConfig from './api/routes.js';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routeConfig = require('./api/routes');

const app = express();
const port = 3000;


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopping-js');
}

main()
  .then(() => console.log('conectado a la DB'))
  .catch((error) => console.log('error conectando a la DB:', error));

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

routeConfig(app);

app.listen(port, 'localhost', () => {
  console.log(`Example app listening on port ${port}`);
});
