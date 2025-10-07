const express = require("express");
const {getAllUsers,getUser} =require('../../controllers/userController/userController');
const { protect, authorize } = require("../../middlewares/authMiddleware");


const router = express.Router();



router.get("/allusers", protect, getAllUsers);
router.get("/user", protect, getUser);



module.exports = router;