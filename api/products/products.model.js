const mongoose = require ('mongoose');
//crear el esquema del producto
const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
})

//creando el modelo
const productModel = mongoose.model('product',ProductSchema)

module.exports = productModel;
