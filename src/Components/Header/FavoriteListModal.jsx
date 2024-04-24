import { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../Context/WeatherContext";
import { getLocationByName } from "../../data/locations-data";

const FavoriteListModal = () => {
  const {favorite} = useContext(FavoriteContext);
  const {setSelectedLocation} = useContext(LocationContext);

  const handleClick=(location)=>{
    const filtered = getLocationByName(location);
    setSelectedLocation(filtered);
  }
  
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favorite Locations</h3>
      <ul className="space-y-2 mt-4 p-2 *:cursor-pointer">
       {
        favorite.map(fav=><li className="text-xl font-semibold hover:bg-gray-200 rounded p-2" key={fav.location}>
          <a 
          href="#"
          onClick={()=>handleClick(fav.location)}
          >{fav.location}</a>
          </li>)
       }
      </ul>
    </div>
  );
};

export default FavoriteListModal;
