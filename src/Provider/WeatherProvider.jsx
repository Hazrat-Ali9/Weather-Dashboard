/* eslint-disable react/prop-types */
import { WeatherContext } from "../Context/WeatherContext";
import { useWeather } from "../Hooks";

const WeatherProvider = ({children}) => {
    const {weatherData,loading,error} = useWeather();
    return (
        <WeatherContext.Provider value={{weatherData,loading,error}}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;