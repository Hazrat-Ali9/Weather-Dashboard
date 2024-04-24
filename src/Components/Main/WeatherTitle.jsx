import { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherContext";
import { getFormattedDate } from "../../util/date-util";

import pin from "../../assets/pin.svg";
import cloud from "../../assets/icons/cloud.svg";
import haze from "../../assets/haze.svg";
import snow from "../../assets/icons/snow.svg";
import sunny from "../../assets/icons/sunny.svg";
import rain from "../../assets/rainy.svg";
import thunder from "../../assets/thunder.svg";

const WeatherTitle = () => {
  const { weatherData } = useContext(WeatherContext);

  const { temperature, location, time, climate } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return rain;
      case "Clouds":
        return cloud;
      case "Clear":
        return sunny;
      case "Snow":
        return snow;
      case "Thunder":
        return thunder;
      case "Fog":
        return haze;
      case "Mist":
        return haze;

        default:
          return sunny;
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="climate" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherTitle;
