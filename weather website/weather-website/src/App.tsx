import React, { useState } from "react";
import OpenAI from "openai";
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

const App: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [aiDescription, setAiDescription] = useState("");

  // ✅ API Keys
  const WEATHER_API_KEY = "aae308440e0fc63e257c420d973a245f";
  const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

  // ✅ OpenAI setup
  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  // ✅ Floating image cards
  const landmarkImages = [
    "/assets/images 1.jpg",
    "/assets/images 2.jpg",
    "/assets/images 3.jpg",
    "/assets/images 4.jpg",
    "/assets/images 5.jpg",
    "/assets/images 6.jpg",
    "/assets/images 7.jpg",
  ];

  // ✅ AI weather description
  const getAIWeatherDescription = async (weatherData: WeatherData) => {
    try {
      const prompt = `The weather in ${weatherData.name}, ${weatherData.sys.country} is:
      - Temperature: ${Math.round(weatherData.main.temp)}°C
      - Feels like: ${Math.round(weatherData.main.feels_like)}°C
      - Condition: ${weatherData.weather[0].description}
      - Humidity: ${weatherData.main.humidity}%
      - Wind Speed: ${weatherData.wind.speed} m/s

      Write a short, friendly sentence describing what the weather feels like.`;

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      setAiDescription(response.choices[0].message.content || "");
    } catch {
      setAiDescription("AI description unavailable right now.");
    }
  };

  // ✅ Fetch weather data
  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setAiDescription("");

    try {
      const response = await fetch(
        `${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");

      const data: WeatherData = await response.json();
      setWeather(data);
      await getAIWeatherDescription(data);
    } catch {
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
            onKeyPress={(e) => e.key === "Enter" && fetchWeather()}
          />
          <button onClick={fetchWeather} disabled={loading}>
            {loading ? <i className="fas fa-spinner fa-spin"></i> : "Search"}
          </button>
        </div>

        {error && <p className="error"><i className="fas fa-exclamation-circle"></i> {error}</p>}

        {weather && !loading && (
          <div className="weather-card">
            <h2>
              <i className="fas fa-map-marker-alt"></i> {weather.name}, {weather.sys.country}
            </h2>
            <div className="main-weather">
              <div className="temp-container">
                <p className="temperature">{Math.round(weather.main.temp)}°</p>
                <p className="condition">{weather.weather[0].description}</p>
              </div>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="weather-icon"
              />
            </div>

            <div className="details">
              <div className="detail-item">
                <i className="fas fa-temperature-high"></i>
                <span>Feels like</span>
                <strong>{Math.round(weather.main.feels_like)}°C</strong>
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

            {aiDescription && (
              <div className="ai-description">
                <h3><i className="fas fa-robot"></i> AI Insight</h3>
                <p>{aiDescription}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
