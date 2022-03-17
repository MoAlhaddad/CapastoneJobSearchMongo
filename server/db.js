const mongoose = require("mongoose");
import { getDatabaseUri } from "./config.js";
dbconnect();
async function dbconnect() {
  try {
    await mongoose.connect(getDatabaseUri(), { useNewUrlParser: true });
    console.log("Mongo Db Connection Success");
  } catch (error) {
    console.log("Mongo Db Conncection Failed");
  }
}

module.exports = mongoose;
