const mongoose = require("mongoose");
const { Schema } = mongoose;

// designing our schema

const ItemSchema = new Schema({
  CategoryName: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },

  options: [
    {
      half: String,
      full: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("item", ItemSchema);
