// routes/index.js

const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const leaveRoutes = require("./leaveRoutes");
const workSummaryRoutes = require("./workSummaryRoutes"); // Include work summary routes
const imageRoutes = require("./image.routes");
router.use("/auth", authRoutes);
router.use("/leave", leaveRoutes);
router.use("/work-summary", workSummaryRoutes); // Use work summary routes
router.use("/image", imageRoutes);

module.exports = router;
