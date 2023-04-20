async function getWeather(city) {
    try {
      const response = await fetch(`/weather/${city}`);
      const data = await response.json();
      document.getElementById('city').textContent = data.name;
      document.getElementById('temperature').textContent = `${data.temperature}°C`;
      document.getElementById('feels-like').textContent = `${data.feelsLike}°C`;
      document.getElementById('description').textContent = data.description;
      document.getElementById('icon').setAttribute('src', data.icon);
      document.getElementById('wind-speed').textContent = `${data.windSpeed} m/s`;
      document.getElementById('visibility').textContent = data.visibilityDistance.toFixed(2);
      document.getElementById('humidity').textContent = data.humidity;
    } catch (error) {
      console.error(error);
    }
  }
 
  function myFunction() {
    var city = document.getElementById("myText").value;
    console.log(city);
    getWeather(city);
  }
