const userService = require("../services/userService");

exports.createUser = async (req, res) => {
  try {
     console.log("Request Body:", req.body);
    const user = await userService.createUser(req.body);
     console.log("User Created:", user);
    res.status(201).json(user);
  } catch (error) {
     console.error("Error:", error.message);
    res.status(400).json({ error: error.message });
  }
};
