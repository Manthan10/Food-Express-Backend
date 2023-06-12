const mongoose = require("mongoose");
const { Schema } = mongoose;

// designing our schema

const CategoryFood = new Schema({
  CategoryName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("category", CategoryFood);
