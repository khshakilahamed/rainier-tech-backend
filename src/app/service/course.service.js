const ApiError = require("../../errors/ApiError");
const httpStatus = require("http-status");
const Course = require("../model/course.model");

const create = async (data) => {
  const course = await Course.create(data);
  return course;
};

const getCourses = async () => {
  const courses = await Course.find();
  return courses;
};

const getSingleCourse = async (id) => {
  const course = await Course.findById(id);

  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, "Course does not found");
  }

  return course;
};

const updateCourse = async (id, data) => {
  const course = await Course.findByIdAndUpdate(id, data, {
    new: true,
  });

  return course;
};

const deleteCourse = async (id) => {
  const course = await Course.findByIdAndDelete(id);

  return course;
};

module.exports = {
  create,
  getCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
