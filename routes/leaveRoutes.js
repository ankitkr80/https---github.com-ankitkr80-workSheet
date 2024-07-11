const express = require("express");
const router = express.Router();
const leaveController = require("../controllers/leaveController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/apply", authMiddleware, leaveController.applyLeave);

module.exports = router;
