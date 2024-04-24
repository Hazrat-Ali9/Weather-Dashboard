import { useState, useEffect, useContext } from "react"
import { LocationContext } from "../Context/WeatherContext";


const useWeather = () => {

    const [weatherData, setWeatherData] = useState(
        {
            location: '',
            climate: '',
            description:'',
            temperature: '',
            maxTemperature: '',
            minTemperature: '',
            humidity: '',
            cloudPercentage: '',
            wind: '',
            time: '',
            longitude: '',
            latitude: '',
        }
    );


    const [loading, setLoading] = useState({
        state: false,
        message: ''
    });

    const [error, setError] = useState(null);

    const {selectedLocation} = useContext(LocationContext);

    const {longitude,latitude} = selectedLocation;

    const fetchWeatherData = async(longitude, latitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: 'Data is fetching...'
            })

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);

            if (!response.ok) {
                const errorMessage = `fetching weather data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();

            const updatedWeatherData =
            {
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                description: data?.weather[0]?.description,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            }
            setWeatherData(updatedWeatherData);
        }
        catch (error) {
            setError(error)
        }
        finally {
            setLoading({
                ...loading,
                state: false,
                message: ''
            })
        }
    }

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Finding location..."
        });

        if(longitude && latitude){
            fetchWeatherData(longitude,latitude)
        }else{
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    fetchWeatherData(position.coords.longitude, position.coords.latitude)
                }
            )
        }
    }, [longitude,latitude])

    return {
        weatherData,
        loading,
        error
    }

}

export default useWeather;