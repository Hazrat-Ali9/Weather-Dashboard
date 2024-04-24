import { useState } from "react"
import { LocationContext } from "../Context/WeatherContext";


// eslint-disable-next-line react/prop-types
const LocationProvider =({children})=>{

    const [selectedLocation,setSelectedLocation] = useState({
        location: '' ,
        latitude: 0 ,
        longitude: 0 ,
    });

    return (
        <LocationContext.Provider value={{selectedLocation,setSelectedLocation}}>
            {children}
        </LocationContext.Provider>
    )

}

export default LocationProvider;