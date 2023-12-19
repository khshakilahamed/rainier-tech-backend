const ApiError = require("../../errors/ApiError");
const httpStatus = require("http-status");
const Course = require("../model/course.model");
const { courseSearchableFields } = require("../utils/course");

const create = async (data) => {
  const course = await Course.create(data);
  return course;
};

const getCourses = async (searchTerm, limit = 10, page = 1) => {
  const skip = (page - 1) * limit;

  const search = searchTerm
    ? {
        $or: courseSearchableFields.map((field) => ({
          [field]: {
            $regex: searchTerm,
            $options: "i",
          },
        })),
      }
    : {};

  const courses = await Course.find(search)
    .sort({ createdAt: "desc" })
    .skip(skip)
    .limit(limit);

  const total = await Course.countDocuments(search);

  return {
    meta: {
      page: parseInt(page),
      per_page: parseInt(limit),
      total: total,
    },
    data: courses,
  };
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
