import React, { useState } from "react";
import { fetchTemperature } from "../services/TemperatureService";
import TemperatureDisplay from "../components/TemperatureDisplay";

const TemperatureContainer: React.FC = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await fetchTemperature(city);
      setTemperature(data);
    } catch (error) {
      console.error(error);
      alert("Error fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center text-center p-4">
        <h1 className="text-3xl font-bold mb-6">Temperature App</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-2 mr-2 rounded"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {temperature && !loading && <TemperatureDisplay data={temperature} />}
      </div>
    </div>
  );
};

export default TemperatureContainer;
