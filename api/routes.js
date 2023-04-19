// import products from './products'
const products = require('./products');
const users = require ('./users')

const routes = (app) => {
  app.use('/api/products', products);
  app.use('/api/users',users)
};

module.exports = routes;
