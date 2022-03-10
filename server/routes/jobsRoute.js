const express = require("express");
const router = express.Router();
const Job = require("../models/jobModel");
import { ensureCorrectUser, ensureLoggedIn } from "../middleware/auth.js";

router.get("/getalljobs", ensureLoggedIn, async (req, res) => {
  try {
    const jobs = await Job.find();
    res.send(jobs);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get("/:id", ensureLoggedIn, async (req, res) => {
  try {
    const id = req.params.id;
    const job = await Job.findById(id);
    res.send(job);
  } catch (error) {
    return res.status(400).json({ error });
  }
});
module.exports = router;
