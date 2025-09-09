const express = require("express");
const router = express.Router();

/********* Import Here Controller Files **********/
const { getData, getRoot } = require("../controllers/dataController");
const { protect, authorize } = require("../middlewares/authMiddleware");
const { notFound, errorHandler } = require("../middlewares/errorMiddleware");
const validateRequest = require("../middlewares/validateMiddleware");





router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});





/******** Root route *******/
router.get("/", getRoot);

/******* API route ******/
router.get("/api/data", getData);





/*********** Global Error Handling Middleware *************/
router.use(notFound);
router.use(errorHandler);






module.exports = router;
