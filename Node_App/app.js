const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));
const apiKey = '9253769f206d2cb0bd5c10c010db959a';
 

  app.get('/weather/:city', async (req, res) => {
    const { city } = req.params;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    try {
      const { data } = await axios.get(url);
      const { name, main, weather, wind, visibility, humidity } = data;
      const temperature = main.temp;
      const feelsLike = main.feels_like;
      const description = weather[0].description;
      const icon = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
      const windSpeed = wind.speed;
      const visibilityDistance = visibility / 1000; // convert to km
      res.send({ name, temperature, feelsLike, description, icon, windSpeed, visibilityDistance, humidity });
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

