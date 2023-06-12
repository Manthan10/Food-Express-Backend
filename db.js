const mongoose = require("mongoose");
const mongoURI = process.env.DB;
const ItemSchema = require("./models/Items");
const CategoryFood = require("./models/Categories");

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected successfully");
    const data = await ItemSchema.find({});
    const category = await CategoryFood.find({});

    global.foodData = data;
    global.foodCategory = category;
  } catch (err) {
    console.log("Error while connecting to databse", err);
  }
};

module.exports = mongoDB;
