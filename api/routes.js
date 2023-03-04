//son las rutas de la carpeta
//import products from './products'
const products = require('./products')
const routes =(app)=>{
    app.use('/api/products',products)
}


module.exports = routes;
