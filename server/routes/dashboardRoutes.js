const express = require("express");
const router = express.Router();

const {
  getStatusSummary,
  getOverview,
  getPrioritySummary,
} = require("../controllers/dashboardController");


router.get("/status-summary", getStatusSummary);
router.get("/overview", getOverview);
router.get("/priority-summary", getPrioritySummary);

module.exports = router;