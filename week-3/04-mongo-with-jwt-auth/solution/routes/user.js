const userMiddleware = require("../middleware/user");
const { Router } = require("express");
const { Admin, User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  await User.create({
    username: username,
    password: password,
  });

  res.json({
    message: "Admin created successfully",
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  console.log(username);
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
