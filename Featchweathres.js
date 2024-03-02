import Axios from "axios";
import Key from '../config'


const OpenWeatherKey = Key;
const Url = "https://api.openweathermap.org/data/2.5/weather";


const FetchWeatherApi = async (query) => {
  const { data } = await Axios.get(Url, {
    params: {
      q: query,
      units:'metric',
      APPID: OpenWeatherKey
    }
  }).catch((err)=>{
    if(err.response){
      alert('Enter valid city name')
    }
  })

  console.log(data)
  return data;
};

export default FetchWeatherApi;
