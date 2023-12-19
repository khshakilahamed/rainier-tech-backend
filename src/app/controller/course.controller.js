const courseService = require("../service/course.service");

const create = async (req, res, next) => {
  try {
    const result = await courseService.create(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully created course",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCourses = async (req, res, next) => {
  try {
    const { searchTerm, per_page, page } = req.query;
    const result = await courseService.getCourses(searchTerm, per_page, page);

    res.status(200).json({
      status: "success",
      message: "Successfully fetched courses",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleCourse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await courseService.getSingleCourse(id);

    res.status(200).json({
      status: "success",
      message: "Successfully fetched course",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateCourse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await courseService.updateCourse(id, data);

    res.status(200).json({
      status: "success",
      message: "Successfully updated course",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCourse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await courseService.deleteCourse(id);

    res.status(200).json({
      status: "success",
      message: "Successfully deleted course",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
