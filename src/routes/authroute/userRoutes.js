const express = require("express");
const { registerUser, loginUser, getAllUsers,getUser } = require("../../controllers/authcontroller/userController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/allusers", protect, getAllUsers);
router.get("/user", protect, getUser);



module.exports = router;