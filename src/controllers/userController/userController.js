const User = require("../../models/User");


exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};


exports.getUser = async (req, res) => {
  const users = await User.findById(req.user.id).select("-password").lean();
  res.json(users);
};
