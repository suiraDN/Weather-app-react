import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./componets/TopButtons";
import Inputs from "./componets/Inputs";
import TimeAndLocation from "./componets/TimeAndLocation";
import TemperatureAndDetails from "./componets/TemperatureAndDetails";
import Forecast from "./componets/Forecast";
import getFormattedWeatherData from "./services/weatherService";

function App() {
	const fetchWeather = async () => {
		const data = await getFormattedWeatherData({ q: "London" });
	};
	fetchWeather();

	return (
		<div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
			<TopButtons />
			<Inputs />
			<TimeAndLocation />
			<TemperatureAndDetails />
			<Forecast title="hourly forecast" />
			<Forecast title="daily forecast" />
		</div>
	);
}

export default App;
