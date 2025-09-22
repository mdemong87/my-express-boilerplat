const express = require("express");
const { registerUser, loginUser, getUsers } = require("../../controllers/authcontroller/userController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", protect, getUsers);

module.exports = router;