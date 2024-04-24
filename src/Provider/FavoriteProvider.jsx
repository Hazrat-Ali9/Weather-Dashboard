import { FavoriteContext } from "../Context/WeatherContext";
import { useLocalStorage } from "../Hooks"

const FavoriteProvider=({children})=>{

    const [favorite,setFavorite] = useLocalStorage('favorites',[]);

    const addToFavorite = (location,latitude,longitude)=>{
        setFavorite([
            ...favorite,
            {
                location : location,
                latitude : latitude,
                longitude :longitude
            }
        ])
    }

    const removeFromFavorites = (location)=>{

        const restFavorites = favorite.filter(
            (fav)=> fav.location !== location
        );

        setFavorite(restFavorites);
    }

    return(
        <FavoriteContext.Provider value={{favorite,addToFavorite,removeFromFavorites}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteProvider;