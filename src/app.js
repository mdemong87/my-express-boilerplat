const express = require("express");
const cors = require("cors");
const dataRoutes = require("./routes/dataRoutes");
const authRoutes=require('./routes/authroute/userRoutes');

const app = express();


/********* Body Data Parse **********/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/*********** Middleware Here ***********/
app.use(cors());
app.use(express.json());


/********** Routes Define Here *********/
app.use("/", authRoutes);

/********** Routes Define Here *********/
app.use("/", dataRoutes);


/******* Export the module ******/
module.exports = app;
