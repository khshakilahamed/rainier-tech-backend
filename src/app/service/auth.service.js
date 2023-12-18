const ApiError = require("../../errors/ApiError");
const User = require("../model/user.model");
const httpStatus = require("http-status");

const register = async (data) => {
  const isUserExist = await User.findOne({ email: data.email });

  if (isUserExist) {
    throw new ApiError(httpStatus.CONFLICT, "User already exist");
  }

  const user = await User.create(data);

  return user;
};

module.exports = { register };
