const express = require("express");
const courseController = require("../controller/course.controller");

const router = express.Router();

router.post("/create", courseController.create);
router.get("/", courseController.getCourses);
router.get("/:id", courseController.getSingleCourse);
router.patch("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
