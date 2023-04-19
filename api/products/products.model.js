const mongoose = require("mongoose");
//crear el esquema del producto
const ProductSchema = new mongoose.Schema({
  name: { type: String, uppercase: true, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true },
  image: String,
});
ProductSchema.path("stock").validate(
  (stockValue) => stockValue > 0,
  "stock must be greater than 0"
);

//creando el modelo
const productModel = mongoose.model("product", ProductSchema);

module.exports = productModel;
