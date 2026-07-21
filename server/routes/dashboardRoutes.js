// dashboardRoutes.js
// This file maps URLs to the controller functions we just wrote.

const express = require("express");
const router = express.Router(); // a mini, self-contained set of routes

const {
  getStatusSummary,
  getOverview,
  getPrioritySummary,
} = require("../controllers/dashboardController");

// When someone visits GET /api/dashboard/status-summary, run getStatusSummary
router.get("/status-summary", getStatusSummary);

// When someone visits GET /api/dashboard/overview, run getOverview
router.get("/overview", getOverview);

// When someone visits GET /api/dashboard/priority-summary, run getPrioritySummary
router.get("/priority-summary", getPrioritySummary);

module.exports = router;