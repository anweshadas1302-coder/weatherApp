const express = require("express");
const router = express.Router();

const weatherController = require("../controllers/weatherController");

// Home Page
router.get("/", weatherController.getHomePage);
router.get("/weather", weatherController.getWeather);

module.exports = router;