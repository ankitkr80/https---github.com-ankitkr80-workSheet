// routes/workSummaryRoutes.js

const express = require("express");
const router = express.Router();
const workSummaryController = require("../controllers/workSummaryController");
const authMiddleware = require("../middlewares/authMiddleware");

// POST /api/work-summary/submit
router.post("/submit", authMiddleware, workSummaryController.submitWorkSummary);

module.exports = router;
