const express = require("express");
const router = express.Router();

/********* Import Here Controller Files **********/
const { protect, authorize } = require("../../middlewares/authMiddleware");
const { notFound, errorHandler } = require("../../middlewares/errorMiddleware");
const validateRequest = require("../../middlewares/validateMiddleware");
const {health}=require('../../controllers/healthContorller/healthController');



router.get("/health",health);



router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});





/*********** Global Error Handling Middleware *************/
router.use(notFound);
router.use(errorHandler);





module.exports = router;
