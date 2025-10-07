const express = require("express");
const cors = require("cors");
const healthRoutes = require("./routes/health/healthRoute");
const authRoutes = require('./routes/authroute/authUserRoutes');
const userRoutes = require('./routes/userroute/userRoutes');
const productRoutes = require('./routes/productroute/productRoute');
const profileRoutes = require('./routes/profile/profileRoute');



const app = express();


/********* Body Data Parse **********/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/*********** Middleware Here ***********/
app.use(cors());
app.use(express.json());


/********** auth Routes Define Here *********/
app.use("/", authRoutes);


/********** user Routes Define Here *********/
app.use("/", userRoutes);



/********** Product Routes Define Here *********/
app.use("/", productRoutes);



/********** Profile Routes Define Here *********/
app.use("/", profileRoutes);



/********** health check Routes Define Here *********/
app.use("/", healthRoutes);


/******* Export the module ******/
module.exports = app;
