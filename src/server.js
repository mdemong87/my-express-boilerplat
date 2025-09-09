const app = require("./app");
const { environment } = require("./config/env");
const connectDB =require('./config/db');


/******** PORT Define *******/
const PORT = process.env.PORT || 5000;


/********** Connect to Database Here **********/
connectDB(); 


/*********** Start The Server ***********/
app.listen(PORT, () => {
  console.log(`🚀 Server running on port: ${PORT} in ${environment} mode`);
});
