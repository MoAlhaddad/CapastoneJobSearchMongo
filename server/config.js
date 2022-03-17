"use strict";

/** Shared config for application; can be required many places. */

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 5000;

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return (
    process.env.DATABASE_URL ||
    "mongodb+srv://mohamad25:Ma6cr7rmfc$@cluster0.kozop.mongodb.net/mohamad25"
  );
}

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 13;

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
