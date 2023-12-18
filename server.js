const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 5000;

async function databaseConnection() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected");

    app.listen(port, () => {
      console.log(`Application listening on port ${port}`);
    });
  } catch (error) {
    console.log("Database connection failed", error);
  }
}

databaseConnection();
