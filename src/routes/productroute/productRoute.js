const express = require("express");
const { getAllProduct, getSingleProduct, createProduct, updateProduct, deleteProduct } = require('../../controllers/productController/productController');
const { protect, authorize } = require("../../middlewares/authMiddleware");


const router = express.Router();



router.get("/allproducts", protect, getAllProduct);

router.get("/singleProduct/:id", protect, getSingleProduct);

router.post("/createProduct", protect, createProduct);

router.put("/updateProduct/:id", protect, updateProduct);

router.delete("/deleteProduct/:id", protect, deleteProduct);



module.exports = router;