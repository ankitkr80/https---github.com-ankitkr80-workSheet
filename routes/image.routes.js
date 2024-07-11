// routes/image.routes.js
const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const images = require("../controllers/image.controller");
const authMiddleware = require("../middlewares/authMiddleware");
router.post(
  "/upload",
  authMiddleware,
  upload.single("image"),
  images.uploadImage
);
module.exports = router;
