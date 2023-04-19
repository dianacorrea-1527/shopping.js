const Product = require("./products.model");
const respondWithResult = (res, code) => (thenResponse) => {
  if (thenResponse) {
    res.status(code).json(thenResponse);
  }
};
//closure,funcion que responde con otra funcion

const handleError = (res, code) => (error) => {
  if (error) {
    res.status(code).json( error );
  }
};
const index = (req, res) =>
  Product.find()
    .exec()
    //.then((products) => res.status(200).json(products))
    .then(respondWithResult(res, 200))
    .catch(handleError(res, 500));

const create = (req, res) => {
  console.log(req.body);
  if (req.body) {
    return Product.create(req.body)
    .then(respondWithResult(res, 200))
    .catch(handleError(res, 500));
  }
  return res.status(400).json({ message: "missing product" });
};

const showById = (req, res) =>
  Product.find({ _id: req.params.id })
    .exec()
    .then(respondWithResult(res, 200))
    .catch(handleError(res, 500));
/* implemets find by id in mongo or ahother db */

const deleteById = (req, res) =>
  Product.deleteOne({ _id: req.params.id })
    .exec()
    .then(respondWithResult(res, 200))
    .catch(handleError(res, 500));

const updateById = (req, res) =>
  Product.updateOne(
    { _id: req.params.id },
    { [req.body.field]: req.body.value }
  )
    .exec()
    .then(respondWithResult(res, 200))
    .catch(handleError(res, 500));


// export default index;

module.exports = {
  index,
  create,
  showById,
  deleteById,
  updateById,
};
