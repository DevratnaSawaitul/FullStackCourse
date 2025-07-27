import axios from "axios";

// helper to use geolocation with async/await
const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const getWeather = async () => {
  try {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY;
    if (!navigator.geolocation) {
      throw new Error("Geolocation not supported");
    }

    // await geolocation
    const position = await getCurrentPosition();
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // fetch weather
    const request_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(request_url);

    if (response.data.cod === 200) {
      return response.data;
    } else {
      throw new Error("Unable to load weather");
    }
  } catch (e) {
    console.error("Error fetching weather:", e);
    Swal.fire({
      title: "Something went wrong!",
      text: "Please try again after some time.",
      icon: "error",
    });
    return null;
  }
};
