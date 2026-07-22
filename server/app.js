
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Helpdesk backend is running!");
});

app.use("/api/dashboard", dashboardRoutes);
const errorHandler = require("./middleware/errorMiddleware");
app.use(errorHandler);

module.exports = app;
