const mongoose = require("mongoose");

const mongoURI = process.env.DB;

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected successfully");
  } catch (err) {
    console.log("Error while connecting to databse", err);
  }
};

module.exports = mongoDB;
