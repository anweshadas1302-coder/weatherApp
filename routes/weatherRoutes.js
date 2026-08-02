const express = require("express");
const router = express.Router();

const weatherController = require("../controllers/weatherController");

// Home Page
router.get("/", weatherController.getHomePage);

module.exports = router;