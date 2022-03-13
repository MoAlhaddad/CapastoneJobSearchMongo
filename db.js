require("dotenv").config();

const mongoose = require("mongoose");
dbconnect();
async function dbconnect() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
    });
    console.log("Mongo Db Connection Success");
  } catch (error) {
    console.log("Mongo Db Conncection Failed");
  }
}

module.exports = mongoose;
