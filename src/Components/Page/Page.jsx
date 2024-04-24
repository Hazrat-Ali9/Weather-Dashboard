import { useContext, useEffect, useState } from "react";
import Header from "./../Header/Header";
import WeatherBoard from "./../Main/Weather";
import { WeatherContext } from "../../Context/WeatherContext";

import clearSky from "../../assets/backgrounds/clear-sky.jpg";
import fewClouds from "../../assets/backgrounds/few-clouds.jpg";
import mist from "../../assets/backgrounds/mist.jpeg";
import rainyDay from "../../assets/backgrounds/rainy-day.jpg";
import ScatteredClouds from "../../assets/backgrounds/scattered-clouds.jpg";
import snow from "../../assets/backgrounds/snow.jpg";
import sunny from "../../assets/backgrounds/sunny.jpg";
import thunderstorm from "../../assets/backgrounds/thunderstorm.jpg";
import winter from "../../assets/backgrounds/winter.jpg";

const Page = () => {
  const { loading, weatherData } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return rainyDay;
      case "Clouds":
        return fewClouds;
      case "Clear":
        return clearSky;
      case "Snow":
        return snow;
      case "Thunder":
        return thunderstorm;
      case "Fog":
        return ScatteredClouds;
      case "Mist":
        return mist;
      case "Winter":
        return winter;

      default:
        return sunny;
    }
  }

  useEffect(() => {
    const bgImage =getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div>
          <p className="text-center text-4xl mt-[450px]">
            {loading.message}...
          </p>
        </div>
      ) : (
        <div 
        style={{backgroundImage: `url(${climateImage})`}}
        className="grid place-items-center h-screen bg-no-repeat bg-cover">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
