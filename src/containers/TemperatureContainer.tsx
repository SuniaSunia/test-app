import React, { useState } from "react";
import { fetchWeather } from "../services/TemperatureService";
import TemperatureDisplay from "../components/TemperatureDisplay";

const TemperatureContainer: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (error) {
      console.error(error);
      alert("Error fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {weather && !loading && <TemperatureDisplay data={weather} />}
    </div>
  );
};

export default TemperatureContainer;
