import React, { useEffect, useState } from "react";

import "./App.css";

// 0. Use environment variable to make API Request

// 1. Firing functions on component load

// 2. Making api requests in React

// 3. Requesting user location permissions navigator.geolocation.getCurrentPosition()

// 4. Parse a response from an API

// 5. Injected that data into our UI.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      treoStudents: ['Majid', 'Khoi', 'Khoi'],
      school: 'CoderSchool'
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    const fetchWeather = async (lat, lon) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      );
      const json = await response.json();
      this.setState({
        weather: json,
        teacherIsPro: true
      });
    };
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      fetchWeather(latitude, longitude);
    });
  }

  render() {
    console.log({ state: this.state });
    if (!this.state.weather) return <h1>Loading!</h1>;
    return (
      <div className="App">
        <h1>Class Based Component Weather app!</h1>
        <h3>{this.state.weather.name}</h3>
        <h3>{this.state.weather.main.temp}</h3>{" "}
      </div>
    );
  }
}

// function App() {
//   const [weather, setWeather] = useState(null)

// useEffect(() => {
//   const fetchWeather = async (lat, lon) => {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
//     );
//     const json = await response.json();
//     setWeather(json);
//   };
//   navigator.geolocation.getCurrentPosition((pos) => {
//     const { latitude, longitude } = pos.coords;
//     fetchWeather(latitude, longitude);
//   });
// }, []);

//   console.log({ weather });

//   if (!weather) {
//     return <h1>Loading!</h1>
//   }

//   return (
//     <div className="App">
//       <h1>Weather app!</h1>
//       <h3>{weather.name}</h3>
//       <h3>{weather.main.temp}</h3>
//     </div>
//   );
// }

export default App;
