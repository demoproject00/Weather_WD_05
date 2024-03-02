import Axios from "axios";
import Weather_Key from "../config";

const OpenWeatherKey = Weather_Key;
const Url = "https://api.openweathermap.org/data/2.5/forecast";

const FetchForecast = async (query) => {
  const { data } = await Axios.get(Url, {
    params: {
      q: query,
      units: "metric",
      APPID: OpenWeatherKey
    }
  }).catch((err) => {
    if (err.response) {
      alert("Enter valid city name");
    }
  });

  console.log(data);
  return data;
};

export default FetchForecast;
