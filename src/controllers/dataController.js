
/********** Handle basic data API response **********/
const getData = (req, res) => {
  // res.json({ data: "This is some data from the API." });

  throw new Error("This is a checking global error!");
};



/************* Handle root route response **************/
const getRoot = (req, res) => {
  const { environment } = require("../config/env");
  res.json({ message: `Hello from ${environment} environment!` });
};


/*********** modules export from here ************/
module.exports={
  getData,
  getRoot
}