import axios from "axios";

const API = "a1081e6fda913f3206587e5a7e9ae487";
const URL = "https://api.openweathermap.org/data/2.5/weather";

const FetchData = async (query) => {
try {
const response = await axios.get(URL, {
params: {
q: query,
units: "metric",
appid: API
}
});
return {
city: response.data.name,
temperature: response.data.main.temp,
pressure: response.data.main.pressure,
weather: response.data.weather
};
} catch (error) {
console.error("Error fetching weather data", error);
return null;
}
};

export default FetchData;