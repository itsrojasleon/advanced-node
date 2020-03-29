const mongoose = require('mongoose');

module.exports = () => {
  const User = mongoose.model('users');
  return new User({}).save();
};
