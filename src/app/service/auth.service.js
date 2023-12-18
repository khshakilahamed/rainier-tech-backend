const ApiError = require("../../errors/ApiError");
const User = require("../model/user.model");
const httpStatus = require("http-status");
const bcrypt = require("bcrypt");
const { createToken } = require("../../helpers/jwtHelpers");

const register = async (data) => {
  const isUserExist = await User.findOne({ email: data.email });

  if (isUserExist) {
    throw new ApiError(httpStatus.CONFLICT, "User already exist");
  }

  const user = await User.create(data);

  return user;
};

const login = async (data) => {
  const isUserExist = await User.findOne({ email: data.email });
  console.log(isUserExist);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not found");
  }

  const isPassTrue = await bcrypt.compare(data.password, isUserExist.password);

  if (!isPassTrue) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect password");
  }

  const token = createToken(
    { email: isUserExist.email },
    process.env.JWT_SECRET,
    process.env.JWT_EXPIRE
  );

  return token;
};

module.exports = { register, login };
