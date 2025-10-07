const express = require("express");
const { getAllUserProfileInfo, getSingleUserProfileInfo, createProfileInfo, updateProfileInfo, deleteProfileInfo } = require('../../controllers/profile/profileController');
const { protect, authorize } = require("../../middlewares/authMiddleware");


const router = express.Router();



router.get("/allproducts", protect, getAllUserProfileInfo);

router.get("/singleProduct/:id", protect, getSingleUserProfileInfo);

router.post("/createProduct", protect, createProfileInfo);

router.put("/updateProduct/:id", protect, updateProfileInfo);

router.delete("/deleteProduct/:id", protect, deleteProfileInfo);



module.exports = router;