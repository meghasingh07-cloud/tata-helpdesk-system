// app.js
// This file builds the "app" itself: what it knows how to respond to.

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // the DB connection function

const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to the database as soon as the app starts.
connectDB();

// A simple test route.
app.get("/", (req, res) => {
  res.send("Helpdesk backend is running!");
});

// Any URL starting with /api/dashboard gets handled by dashboardRoutes.js
app.use("/api/dashboard", dashboardRoutes);
const errorHandler = require("./middleware/errorMiddleware");
// ... (keep everything else the same, just add this line near your other requires)

// at the very end, after app.use("/api/dashboard", dashboardRoutes);
app.use(errorHandler);

module.exports = app;
