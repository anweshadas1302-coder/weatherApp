const axios = require("axios");

const getWeatherByCity = async (city) => {

    const apiKey = process.env.API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);

   return {

    city: response.data.name,

    country: response.data.sys.country,

    temperature: response.data.main.temp,

    description: response.data.weather[0].description,

    main: response.data.weather[0].main,

    icon: response.data.weather[0].icon,

    feelsLike: response.data.main.feels_like,

    humidity: response.data.main.humidity,

    pressure: response.data.main.pressure,

    windSpeed: response.data.wind.speed,

    tempMin: response.data.main.temp_min,

    tempMax: response.data.main.temp_max,

    visibility: response.data.visibility,

    clouds: response.data.clouds.all,

    sunrise: new Date(response.data.sys.sunrise * 1000)
        .toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        }),

    sunset: new Date(response.data.sys.sunset * 1000)
        .toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        })

};
};


module.exports = {
    getWeatherByCity
};