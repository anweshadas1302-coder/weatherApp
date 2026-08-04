const weatherService = require("../services/weatherService");
const getHomePage = (req, res) => {
    res.render("index", {
        weather: null,
        error: null
    });
};

const getWeather = async (req, res) => {
    try {
        const city = req.query.city;
        const weather = await weatherService.getWeatherByCity(city);
        res.render("index", {
            weather,
            error: null
        });
    }
    catch (error) {
        res.render("index", {
            weather: null,
            error: "City not found!"
        });
    }
};

module.exports = {
    getHomePage,
    getWeather
};