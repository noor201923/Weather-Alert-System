// Array to store city objects
let cityWeatherData = [];

// Form submit event handling
document.getElementById('cityForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Collect input values
  const name = document.getElementById('cityName').value.trim();
  const temperature = parseFloat(document.getElementById('temperature').value);
  const windSpeed = parseFloat(document.getElementById('windSpeed').value);

  // Create new city object
  const newCity = {
    name: name,
    temperature: temperature,
    windSpeed: windSpeed,
    alerts: []
  };

  // Check and add alerts to the city
  checkForAlerts(newCity);

  // Add the new city to the main array
  cityWeatherData.push(newCity);

  // Display updated cities
  displayCities();

  // Reset the form
  document.getElementById('cityForm').reset();
});

// Function to check for alerts based on temperature and wind speed
function checkForAlerts(city) {
  if (city.temperature > 35) {
    city.alerts.push("Heatwave");
  }
  if (city.windSpeed > 80) {
    city.alerts.push("High Wind");
  }
}

// Function to display all cities and their alerts
function displayCities() {
  const citiesList = document.getElementById('citiesList');
  citiesList.innerHTML = ''; // Clear previous entries

  cityWeatherData.forEach(function(city) {
    const cityDiv = document.createElement('div');
    cityDiv.classList.add('city');

    const alertsText = city.alerts.length > 0 ? city.alerts.join(', ') : 'No Alerts';

    cityDiv.innerHTML = `
      <strong>${city.name}</strong><br>
      Temperature: ${city.temperature}°C<br>
      Wind Speed: ${city.windSpeed} km/h<br>
      Alerts: ${alertsText}
    `;

    citiesList.appendChild(cityDiv);
  });
}
