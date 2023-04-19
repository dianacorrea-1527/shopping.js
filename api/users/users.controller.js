const User = require('./users.model');

const respondWithResult = (res, code) => (thenResponse) => {
  if (thenResponse) {
    res.status(code).json(thenResponse);
  }
}; /* closure, funcion que responde con otra funcion */

const handleError = (res, code) => (error) => {
  if (error) {
    res.status(code).json(error);
  }
};

const index = (req, res) => User.find()
  .exec()
  .then(respondWithResult(res, 200))
  .catch(handleError(res, 500));

const create = (req, res) => {
  /* console.log(req.body); */
  if (req.body) {
    return User.create(req.body)
      .then(respondWithResult(res, 200))
      .catch(handleError(res, 500));
  }
  return res.status(400).json({ message: 'missing user' });
};

const showById = (req, res) => User.find({ _id: req.params.id })
  .exec()
  .then(respondWithResult(res, 200))
  .catch(handleError(res, 500));

const deleteById = (req, res) => User.deleteOne({ _id: req.params.id })
  .exec()
  .then(respondWithResult(res, 200))
  .catch(handleError(res, 500));

const updateById = (req, res) => User
  .updateOne(
    { _id: req.params.id },
    { [req.body.field]: req.body.value },
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
