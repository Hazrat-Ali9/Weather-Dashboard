import { useContext, useEffect, useState } from "react";
import heart from "../../assets/heart.svg";
import redHeart from "../../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../../Context/WeatherContext";

const AddToFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorite, addToFavorite, removeFromFavorites } = useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { location, latitude, longitude } = weatherData;

  const handleToggle = () => {
    const found = favorite.find((fav) => fav.location === location);

    if (!found) {
      addToFavorite(location, latitude, longitude);
    } else {
      removeFromFavorites(location);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(()=>{
    const found = favorite.find(fav=> fav.location === location);
    setIsFavorite(found);
  },[])

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleToggle}
        >
          <span>Add to favorite</span>
          <img src={isFavorite ? redHeart : heart} alt="toggleHeart" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavorite;
