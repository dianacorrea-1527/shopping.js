//enrutador de express

const { Router } = require ('express');// permite controlar rutas internas
const controller = require ('./products.controller');

const router = new Router();//instanciar

//sintaxis quien va hacer la ruta, quien la va a controlar
router.get('/',controller); 

module.exports = router;
