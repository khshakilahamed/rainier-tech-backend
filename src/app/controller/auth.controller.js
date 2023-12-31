const authService = require("./../service/auth.service");

const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully registered",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully logged in",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
