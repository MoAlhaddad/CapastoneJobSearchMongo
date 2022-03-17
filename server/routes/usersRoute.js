const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

import { ensureCorrectUser } from "../middleware/auth.js";
import { BCRYPT_WORK_FACTOR } from "../config.js";
router.post("/register", async (req, res) => {
  try {
    // TODO: verify that username does not exist in the db
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    const newuser = new User({ ...req.body, password: hashedPassword });
    const user = await newuser.save();
    const token = createToken(user);
    return res.json({ token });
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (user) {
      const isValid = await bcrypt.compare(req.bodypassword, user.password);
      if (isValid) {
        const token = createToken(user);
        return res.json({ token });
      }
    }
    return res.status(400).json({ message: "Invalid Credentials" });
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/:username/job/:id/apply", ensureCorrectUser, async (req, res) => {
  try {
    //
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.delete(
  "/:username/job/:id/apply",
  ensureCorrectUser,
  async (req, res) => {
    try {
      //
    } catch (error) {
      return res.status(400).json(error);
    }
  }
);

router.post(
  "/:username/job/:id/favorite",
  ensureCorrectUser,
  async (req, res) => {
    try {
      //
    } catch (error) {
      return res.status(400).json(error);
    }
  }
);

router.delete(
  "/:username/job/:id/favorite",
  ensureCorrectUser,
  async (req, res) => {
    try {
      //
    } catch (error) {
      return res.status(400).json(error);
    }
  }
);
module.exports = router;
