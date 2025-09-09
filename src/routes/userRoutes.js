const express = require("express");
const { registerUser, loginUser, getUsers } = require("../controllers/userController");
const { protect, authorize } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", protect, authorize("admin"), getUsers);

module.exports = router;
