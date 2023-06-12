const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    res.send([global.foodData, global.foodCategory]);
  } catch (error) {
    console.log(error);
    res.send("Server Error");
  }
});

module.exports = router;
