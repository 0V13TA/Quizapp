const mongoose = require("mongoose");
const dbURI = "mongodb://localhost:27017/Quizapp";

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
