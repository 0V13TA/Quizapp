const mongoose = require("mongoose");
const dbURI = process.env.VITE_DBURI;

const connectDB = async () => {
  try {
    console.log("Database URI:", dbURI);
    await mongoose.connect(dbURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
