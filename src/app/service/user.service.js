/* eslint-disable no-unused-vars */
const User = require('../models/user.model');

exports.GetAllUserService = async (req, res) => {
  try {
    const user = await User.find();
    return user;
  } catch (e) {
    // Log Errors
    throw Error('Error while get Users');
  }
};
