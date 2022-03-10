const express = require("express");
const app = express();
const db = require("./db.js");
const jobsRoute = require("./routes/jobsRoute");
const usersRoute = require("./routes/usersRoute");
import { authenticateJWT } from "./middleware/auth";
app.use(express.json());
app.use(authenticateJWT);
app.use("/api/jobs/", jobsRoute);

app.use("/api/users/", usersRoute);
const port = process.env.PORT || 3001;

app.listen(port, () => console.log("Node JS Server started"));
