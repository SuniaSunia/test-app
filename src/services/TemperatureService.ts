export const fetchWeather = async (city: string) => {
    const res = await fetch(`https://wttr.in/${city}?format=j1`);
    if (!res.ok) throw new Error('Failed to fetch weather');
    return res.json();
  };
  