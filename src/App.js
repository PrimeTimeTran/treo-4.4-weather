import { useEffect, useState } from "react";

import "./App.css";

// 0. Use environment variable to make API Request

console.log({ env: process.env });



function App() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      );
      const json = await response.json();
      setWeather(json);
    };
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      fetchWeather(latitude, longitude);
    });
  }, []);

  console.log({ weather });

  if (!weather) {
    return <h1>Loading!</h1>
  }


  return (
    <div className="App">
      <h1>Weather app!</h1>
      <h3>{weather.name}</h3>
      <h3>{weather.main.temp}</h3>
    </div>
  );
}

export default App;
