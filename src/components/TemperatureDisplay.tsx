import React from "react";
import styles from "./TemperatureDisplay.module.scss";

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
    <div className={styles.container}>
      <h2>{area}</h2>
      <p className={styles.temperature}>{temp} °C</p>
      <p className={styles.description}>{desc}</p>
    </div>
  );
};

export default TemperatureDisplay;
