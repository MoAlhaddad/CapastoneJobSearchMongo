const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const auth = require("../server/middleware/auth");
const tokens = require("../server/helpers/tokens");

router.post("/register", async (req, res) => {
  try {
    const newuser = new User(req.body);
    const user = await newuser.save();
    res.send("User Created Succesfully");
    const createToken = tokens.createToken(user);
    res.send("Token created successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    const createToken = tokens.createToken(user);
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    res.send(user);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/update", async (req, res) => {
  try {
    await User.findOneAndUpdate({ username: req.body._id }, req.body);

    const user = await User.findOne({ _id: req.body._id });

    res.send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
