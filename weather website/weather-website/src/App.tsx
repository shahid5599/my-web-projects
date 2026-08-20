import React, { useState } from "react";
import "./App.css";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
}

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WEATHER_API_URL ="https://api.openweathermap.org/data/2.5/weather";

const App: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Floating image cards
  const landmarkImages = [
    "/assets/images 1.jpg",
    "/assets/images 2.jpg",
    "/assets/images 3.jpg",
    "/assets/images 4.jpg",
    "/assets/images 5.jpg",
    "/assets/images 6.jpg",
    "/assets/images 7.jpg",
  ];

  // Fetch weather data
  const fetchWeather = async () => {
    const trimmedCity = city.trim();

    if (!trimmedCity) {
      setError("Please enter a city name.");
      return;
    }

    if (!WEATHER_API_KEY) {
      setError("Weather API key is not configured.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${WEATHER_API_URL}?q=${encodeURIComponent(
          trimmedCity
        )}&appid=${WEATHER_API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data: WeatherData = await response.json();
      setWeather(data);
    } catch {
      setWeather(null);
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      {/* Back Link */}
      <a href="../../index.html" className="back-link">
        <i className="fas fa-arrow-left"></i> Back to Home
      </a>

      {/* Orbiting Image Container */}
      <div className="orbit-container">
        <div className="orbit-track">
          {landmarkImages.map((img, index) => (
            <div
              key={index}
              className={`orbit-item item-${index + 1}`}
              style={{ "--i": index } as React.CSSProperties}
            >
              <img src={img} alt={`Landmark ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Central Weather Card */}
      <div className="central-card">
        <h1>Smart Weather Forecast</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchWeather();
              }
            }}
          />

          <button onClick={fetchWeather} disabled={loading}>
            {loading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              "Search"
            )}
          </button>
        </div>

        {error && (
          <p className="error">
            <i className="fas fa-exclamation-circle"></i> {error}
          </p>
        )}

        {weather && !loading && (
          <div className="weather-card">
            <h2>
              <i className="fas fa-map-marker-alt"></i>{" "}
              {weather.name}, {weather.sys.country}
            </h2>

            <div className="main-weather">
              <div className="temp-container">
                <p className="temperature">
                  {Math.round(weather.main.temp)}°
                </p>

                <p className="condition">
                  {weather.weather[0].description}
                </p>
              </div>

              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="weather-icon"
              />
            </div>

            <div className="details">
              <div className="detail-item">
                <i className="fas fa-temperature-high"></i>
                <span>Feels like</span>
                <strong>
                  {Math.round(weather.main.feels_like)}°C
                </strong>
              </div>

              <div className="detail-item">
                <i className="fas fa-tint"></i>
                <span>Humidity</span>
                <strong>{weather.main.humidity}%</strong>
              </div>

              <div className="detail-item">
                <i className="fas fa-wind"></i>
                <span>Wind</span>
                <strong>{weather.wind.speed} m/s</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;