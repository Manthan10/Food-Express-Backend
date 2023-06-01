const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      name: "Manthan Gigoo",
      password: "123456",
      email: "manthangigoo10@gmail.com",
      location: "my location",
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
