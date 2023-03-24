const Product = require("./product.model");

const index = (req, res) =>
  Product.find()
    .exec()
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(500).json({ error }));

const create = (req, res) => {
  console.log(req.body);
  if (req.body) {
    return Product.create(req.body)
      .then(() =>
        res.status(201).json({ message: "producto creado con exito" })
      )
      .catch((error) =>
        res.status(500).json({ message: "no se pudo crear", error })
      );
  }
  return res.status(400).json({ message: "missing product" });
};

const showById = (req, res) =>
  Product.find({ _id: req.params.id })
    .exec()
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(500).json({ error }));
/* implemets find by id in mongo or ahother db */

const deleteById = (req, res) =>
  Product.deleteOne({ _id: req.params.id })
    .exec()
    .then(() =>
      res
        .status(200)
        .json({ message: `producto con id ${req.params.id}borrado.` })
    )
    .catch((error) => res.status(500).json({ error }));

const updateById = (req, res) =>
  Product.updateOne(
    { _id: req.params.id },
     { [req.body.field]: req.body.value},
     )
    .exec()
    .then((product) =>
      res
        .status(200)
        .json({ message: "producto con id   actualizado.", product })
    )
    .catch((error) => res.status(500).json({ error }));

// export default index;

module.exports = {
  index,
  create,
  showById,
  deleteById,
  updateById,
};
