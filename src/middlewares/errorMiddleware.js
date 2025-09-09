/************** Not Found Middleware Here ******************/
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};


/*************** Error Handler Middleware Here ***************/
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  });
};


/**************** modules export from Here **************/
module.exports = { notFound, errorHandler };
