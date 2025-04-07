import React from "react";

type WeatherProps = {
  data: {
    nearest_area: { areaName: { value: string }[] }[];
    current_condition: { temp_C: string; weatherDesc: { value: string }[] }[];
  };
};

const TemperatureDisplay: React.FC<WeatherProps> = ({ data }) => {
  const area = data.nearest_area[0].areaName[0].value;
  const temp = data.current_condition[0].temp_C;
  const desc = data.current_condition[0].weatherDesc[0].value;

  return (
    <div className="p-4 border rounded shadow w-80 text-center">
      <h2 className="text-xl font-bold mb-2">{area}</h2>
      <p className="text-lg">{temp} °C</p>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default TemperatureDisplay;
