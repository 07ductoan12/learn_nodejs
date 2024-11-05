const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://root:rootpassword@localhost:27017");
    console.log("mongodb is connected successfully");
  } catch (error) {
    console.log("Mongodb connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
