
const express = require('express');
const mongoose = require('mongoose');
const routeConfig = require('./api/routes');
const expressConfig = require('./config/express');
const config = require('./config/envairoment');

const app = express();



async function main() {
  await mongoose.connect(config.mongo.uri );
}

main()
  .then(() => console.log('conectado a la DB'))
  .catch((error) => console.log('error conectando a la DB:', error));

expressConfig(app);
routeConfig(app);

app.listen(config.port,config.ip , () => {
  console.log(`Example app listening on port ${config.port}`);
});
