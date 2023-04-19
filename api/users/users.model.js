const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  docId: { type: Number, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  image: String,
});

/* UserSchema
  .path('docId')
  .validate((doc) => doc > 0, 'doc must be greater 0'); */

const User = mongoose.model('User', UserSchema);

module.exports = User;
